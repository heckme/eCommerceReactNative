import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableOpacity, DrawerLayoutAndroid, LayoutAnimation, UIManager} from "react-native";
import {SearchBar, Icon} from "react-native-elements";

import {api} from "./../services/api";
import {GET_CATEGORIES_URL, GET_PRODUCTS_URL} from "./../constants/urls";
import ProductList from "./../components/ProductList";
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateTo} from "./../utils";
import data from "./../config/data";
import categories from "./../config/category";
import {setCategoryList, setProductList} from "./../actions";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            showSearchbar: false
        };
    }

    componentDidMount() {
        this._fetchCategories();
        this._fetchProductList();
    }

    _fetchCategories = async () => {
        try {
            const responsePromise = await api(GET_CATEGORIES_URL, "GET");
            const response = await responsePromise.json();
            if(response) {
                this.props.setCategoryList(response);
            }
        } catch (e) {
            console.log(e);
        }
    }

    _fetchProductList = async () => {
        try {
            const responsePromise = await api(GET_PRODUCTS_URL, "GET");
            const response = await responsePromise.json();
            if(response) {
                this.props.setProductList(response);
            }
        } catch (e) {
            console.log(e);
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

    navigateToProductCatlog = (category) => {
        this.closeDrawer();
        navigateTo("productCatlog", {category});
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
                          <Text style={styles.appTitle}>E-Com</Text>
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
                  <ProductList
                     handleNavigateToProductDetails={this.navigateToProductDetails}
                     data={productList ? productList : []}/>
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
    setCategoryList: payload => dispatch(setCategoryList(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
