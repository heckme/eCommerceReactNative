import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import { Button } from "react-native-elements";

import Toolbar from "./../components/Toolbar";
import CartItem from "./../components/CartItem";
import PriceDetails from "./../components/PriceDetails";
import {navigateTo} from "./../utils";
import {removeFromCart} from "./../actions";

import styles from "./../styles/styles";

class CartDetails extends Component<{}> {

    renderCartItems = (productsInCart) => {
        return productsInCart.map((product) => (
            <CartItem
                product={product}
                handleRemoveProductFromCart={this.removeProductFromCart}
                key={product.id}/>
        ));
    }

    renderTotalPrice = (productsInCart) => {
        return productsInCart.reduce((total, product) => {
            return total + product.productPrice
        }, 0)
    }

    removeProductFromCart = (product) => {
        this.props.removeFromCart(product);
    }

    render() {
        const {productsInCart} = this.props;
        return (
            <View  style={styles.cartContainer}>
                <Toolbar>
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Bag</Text>
                    </View>
                </Toolbar>
                <ScrollView>
                    <View style={styles.itemHeadingContainer}>
                        <Text style={styles.boldText}>Items({productsInCart.length})</Text>
                        <Text style={styles.boldText}>Total: ${this.renderTotalPrice(productsInCart)}</Text>
                    </View>
                    {this.renderCartItems(productsInCart)}
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Price Details</Text>
                    </View>
                    <PriceDetails />
                    <Button
                        title='Place Order'
                        backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                        onPress={() => navigateTo("addressDetails")}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    productsInCart: state.cart.productsInCart
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => dispatch(removeFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
