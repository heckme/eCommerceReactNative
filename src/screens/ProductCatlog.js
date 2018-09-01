import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";

import ProductList from "./../components/ProductList";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateBack, navigateTo} from "./../utils";
import data from "./../config/data";

import styles from "./../styles/styles";

class ProductCatlog extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({
          data
        });
    }

    navigateToProductDetails = (product) => {
        navigateTo("productDetails", {product});
    }

    render() {
        return (
            <View style={styles.dashboardContainer}>
                <Toolbar>
                    <MenuIcon name="arrow-left" size={24} onPress={navigateBack}/>
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>Product Catlog</Text>
                    </View>
                </Toolbar>
                <ProductList
                   handleNavigateToProductDetails={this.navigateToProductDetails}
                   data={this.state.data}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatlog);
