import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {SearchBar, Icon} from "react-native-elements";

import ProductList from "./../components/ProductList";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateTo} from "./../utils";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3, 4, 5, 6, 7]
        }
    }

    onSearchChange = () => {
        console.log("text changed");
    }

    onClearSearch = () => {
        console.log("search clear");
    }

    navigateToProductDetails = (product) => {
        navigateTo("productDetails", {product})
    }

    render() {
        return (
            <View style={styles.dashboardContainer}>
                <Toolbar>
                    <MenuIcon name="menu" size={36}/>
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>E-Com</Text>
                        <TouchableOpacity onPress={() => console.log("cart")}>
                            <Icon
                                name="cart"
                                type="material-community"
                                size={32}
                                color="#000000"/>
                        </TouchableOpacity>
                    </View>
                </Toolbar>
                <SearchBar
                    clearIcon
                    showLoadingIcon={false}
                    lightTheme
                    onChangeText={this.onSearchChange}
                    onClearText={this.onClearSearch}
                    placeholder='Search Here...' />
                <ProductList
                   handleNavigateToProductDetails={this.navigateToProductDetails}
                   data={this.state.data}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
