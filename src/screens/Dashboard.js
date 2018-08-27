import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {SearchBar, Icon} from "react-native-elements";

import ProductList from "./../components/ProductList";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateTo} from "./../utils";
import data from "./../config/data";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showSearchbar: false
        }
    }

    componentDidMount() {
        this.setState({
          data
        });
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

    toggleSearchbar = () => {
        this.setState({
            showSearchbar: !this.state.showSearchbar
        })
    }

    render() {
        return (
            <View style={styles.dashboardContainer}>
                <Toolbar>
                    <MenuIcon name="menu" size={36}/>
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
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
