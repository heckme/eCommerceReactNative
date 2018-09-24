import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ActivityIndicator} from "react-native";

import {api} from "./../services/api";
import {GET_PRODUCTS_URL} from "./../constants/urls";
import ProductList from "./../components/ProductList";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateBack, navigateTo} from "./../utils";
import data from "./../config/data";

import styles from "./../styles/styles";

const defaultProps = {
    queryString: "",
    queryKey: "category"
}

class ProductCatlog extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this._fetchProductList();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    _fetchProductList = async () => {
        try {
            this.setState({
                isLoading: true
            });
            const body = {
                [this.props.queryKey]: this.props.queryString
            }
            const responsePromise = await api(GET_PRODUCTS_URL, "POST", body);
            if(responsePromise && responsePromise.status === 200) {
                const response = await responsePromise.json();
                if(response) {
                    this.setState({
                        data: response,
                        isLoading: false
                    });
                }
            } else {
                throw new Error("Something went wrong. Please try again.");
            }
        } catch (e) {
            console.log(e.message);
            this.setState({
                data: [],
                isLoading: false
            });
        }
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
                {this.state.isLoading ?
                    <View style={[styles.dashboardContainer, styles.justifyCenter]}>
                        <ActivityIndicator size="large" color="#7468c5" />
                    </View>
                  :
                    <View style={styles.dashboardContainer}>
                        {this.state.data.length > 0 ?
                            <ProductList
                               handleNavigateToProductDetails={this.navigateToProductDetails}
                               data={this.state.data}/>
                          :
                            <View style={[styles.dashboardContainer, styles.justifyCenter, styles.alignCenter]}>
                                <Text style={styles.nothingFound}>Sorry! No Product Found</Text>
                            </View>
                        }
                    </View>

                }
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

ProductCatlog.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatlog);
