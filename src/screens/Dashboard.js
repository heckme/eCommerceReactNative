import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableOpacity, DrawerLayoutAndroid} from "react-native";
import {SearchBar, Icon} from "react-native-elements";

import ProductList from "./../components/ProductList";
import Sidebar from "./../components/Sidebar";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateTo} from "./../utils";
import data from "./../config/data";
import categories from "./../config/category";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            categories: [],
            showSearchbar: false
        };
    }

    componentDidMount() {
        this.setState({
          data, categories
        });
    }

    onSearchChange = () => {
        console.log("text changed");
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

    toggleSearchbar = () => {
        this.setState({
            showSearchbar: !this.state.showSearchbar
        })
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    }

    closeDrawer = () => {
        this.drawer.closeDrawer();
    }

    render() {
        const navigationView = (<Sidebar categories={this.state.categories} onPressMenuItem={this.navigateToProductCatlog}/>);
        return (
          <DrawerLayoutAndroid
              drawerWidth={300}
              ref={drawer => this.drawer = drawer}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
              <View style={styles.dashboardContainer}>
                  <Toolbar>
                      <MenuIcon name="menu" size={36} onPress={this.openDrawer}/>
                      <View style={styles.toolbarUtils}>
                          <Text style={styles.appTitle}>E-Com</Text>
                          <View style={[styles.rowContainer, styles.utilsIconCont, styles.justifySpaceBetween]}>
                              <TouchableOpacity onPress={this.toggleSearchbar}>
                                  <Icon
                                      name={!this.state.showSearchbar ? "magnify" : "close"}
                                      type="material-community"
                                      size={32}
                                      color="#000000"/>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => navigateTo("cartDetails")}>
                                  <Icon
                                      name="cart"
                                      type="material-community"
                                      size={32}
                                      color="#000000"/>
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
                     data={this.state.data}/>
              </View>
         </DrawerLayoutAndroid>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
