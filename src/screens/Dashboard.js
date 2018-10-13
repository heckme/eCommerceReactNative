import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableOpacity, DrawerLayoutAndroid, LayoutAnimation, UIManager, ActivityIndicator} from "react-native";
import {SearchBar, Icon} from "react-native-elements";

import {api} from "../services/api";
import {GET_CATEGORIES_URL, GET_PRODUCTS_URL, GET_PRODUCT_DETAILS_URL} from "../constants/urls";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import Toolbar from "../components/Toolbar";
import MenuIcon from "../components/MenuIcon";
import {navigateTo} from "../utils";
import {setCategoryList, setProductList, emptyCart, saveToCart} from "../actions";

import styles from "../styles/styles";

class Dashboard extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            showSearchbar: false,
            isLoading: false
        };
    }

    componentDidMount() {
        this._fetchCategories();
        this._fetchProductList();
        this._validateProductsInCart();
    }

    _validateProductsInCart = async () => {
        const {productsInCart, emptyCart, saveToCart} = this.props;
        if (productsInCart && productsInCart.length > 0) {
            const cartCopy = JSON.parse(JSON.stringify(productsInCart));
            emptyCart();
            cartCopy.forEach(async product => {
                try {
                    const responsePromise = await api(`${GET_PRODUCT_DETAILS_URL}/${product._id}`, "GET");
                    const response = await responsePromise.json();
                    if(response) {
                        if(product.selectedSize) {
                            response.selectedSize = product.selectedSize;
                        }
                        saveToCart(response);
                    }
                } catch (e) {
                    console.log(e);
                }
            });
        }
    }

    _fetchCategories = async () => {
        try {
            const responsePromise = await api(GET_CATEGORIES_URL, "GET");
            if (responsePromise && responsePromise.status === 200) {
                const response = await responsePromise.json();
                if(response) {
                    this.props.setCategoryList(response);
                }
            } else {
                throw new Error("Something went wrong. Please try again.")
            }
        } catch (e) {
            console.log(e);
        }
    }

    _fetchProductList = async () => {
        try {
            this.setState({
                isLoading: true
            });
            const responsePromise = await api(GET_PRODUCTS_URL, "GET");
            if (responsePromise && responsePromise.status === 200) {
                const response = await responsePromise.json();
                if (response) {
                    this.props.setProductList(response);
                    this.setState({
                        isLoading: false
                    });
                }
            } else {
                throw new Error("Something went wrong. Please try again.");
            }
        } catch (e) {
            console.log(e);
            this.setState({
                isLoading: false
            });
        }
    }

    onSearchChange = () => {
        console.log("text changed");
    }

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    onClearSearch = () => {
        console.log("search clear");
    }

    navigateToProductCatlog = (queryKey, queryString) => {
        this.closeDrawer();
        navigateTo("productCatlog", {queryKey, queryString});
    }

    navigateToProductDetails = (product) => {
        navigateTo("productDetails", {product});
    }

    navigateToUserProfile = () => {
        this.closeDrawer();
        navigateTo("userProfile");
    }

    toggleSearchbar = () => {
        this.setState({
            showSearchbar: !this.state.showSearchbar
        });
        this._animate();
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    }

    closeDrawer = () => {
        this.drawer.closeDrawer();
    }

    render() {

        const {productsInCart, productList, categoryList} = this.props;

        const navigationView = (
            <Sidebar
                categories={categoryList ? categoryList : []}
                handleCloseDrawer={this.closeDrawer}
                handleNavigateToUserProfile={this.navigateToUserProfile}
                onPressMenuItem={this.navigateToProductCatlog} />
        );

        return (
          <DrawerLayoutAndroid
              drawerWidth={300}
              ref={drawer => this.drawer = drawer}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
              <View style={styles.dashboardContainer}>
                  <Toolbar>
                      <MenuIcon name="menu" size={24} onPress={this.openDrawer}/>
                      <View style={styles.toolbarUtils}>
                          <Text style={styles.appTitle}>eCommerce</Text>
                          <View style={[styles.rowContainer, styles.utilsIconCont, styles.justifySpaceBetween]}>
                              <TouchableOpacity onPress={this.toggleSearchbar}>
                                <View style={styles.utilsIcon}>
                                    <Icon
                                        name={!this.state.showSearchbar ? "magnify" : "close"}
                                        type="material-community"
                                        size={24}
                                        color="#000000"/>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => navigateTo("cartDetails")}>
                                  <View style={styles.utilsIcon}>
                                      <Icon
                                          name="cart"
                                          type="material-community"
                                          size={24}
                                          color="#000000"/>
                                      {(productsInCart && productsInCart.length > 0) && <Text style={styles.cartitemNumber}>{productsInCart.length}</Text>}
                                  </View>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </Toolbar>
                  {this.state.showSearchbar &&
                      <SearchBar
                          clearIcon
                          showLoadingIcon={false}
                          lightTheme
                          containerStyle={{backgroundColor: "#ffffff"}}
                          inputStyle={{backgroundColor: "rgba(0,0,0,0)"}}
                          onChangeText={this.onSearchChange}
                          onClearText={this.onClearSearch}
                          placeholder='Search Here...' />
                  }
                  {this.state.isLoading ?
                      <View style={[styles.dashboardContainer, styles.justifyCenter]}>
                          <ActivityIndicator size="large" color="#7468c5" />
                      </View>
                    :
                      <ProductList
                         handleNavigateToProductDetails={this.navigateToProductDetails}
                         data={productList ? productList : []} />
                  }
              </View>
         </DrawerLayoutAndroid>
        );
    }
}

const mapStateToProps = state => ({
    productsInCart: state.cart.productsInCart,
    categoryList: state.dataList.categoryList,
    productList: state.dataList.productList
});

const mapDispatchToProps = dispatch => ({
    setProductList: payload => dispatch(setProductList(payload)),
    setCategoryList: payload => dispatch(setCategoryList(payload)),
    emptyCart: () => dispatch(emptyCart()),
    saveToCart: product => dispatch(saveToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
