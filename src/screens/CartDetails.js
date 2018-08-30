import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView, LayoutAnimation, UIManager} from "react-native";
import { Button } from "react-native-elements";

import Toolbar from "./../components/Toolbar";
import CartItem from "./../components/CartItem";
import PriceDetails from "./../components/PriceDetails";
import {navigateTo, renderCurrency, calculateDiscount} from "./../utils";
import {removeFromCart} from "./../actions";

import styles from "./../styles/styles";

class CartDetails extends Component<{}> {

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    renderCartItems = (productsInCart) => {
        return productsInCart.map((product) => (
            <CartItem
                product={product}
                handleRemoveProductFromCart={this.removeProductFromCart}
                key={product.id}/>
        ));
    }

    renderTotalPrice = (productsInCart) => {
        const discountedPrice = productsInCart.map(product => {
            if (product.discount && product.discount > 0) {
                const discount = calculateDiscount(product.productPrice, product.discount);
                return Math.floor(product.productPrice - discount);
            } else {
                return product.productPrice;
            }
        });
        return discountedPrice.reduce((total, price) => {
            return total + price;
        }, 0)
    }

    removeProductFromCart = (product) => {
        this.props.removeFromCart(product);
        this._animate();
    }

    onPlaceOrder = () => {
        const {form} = this.props;
        if(form && form.address && form.address.values && (Object.keys(form.address.values).length > 0)) {
            navigateTo("confirmOrder");
        } else {
            navigateTo("addressDetails");
        }
    }

    render() {
        const {productsInCart, form} = this.props;
        return (
            <View  style={styles.cartContainer}>
                <Toolbar>
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Bag</Text>
                    </View>
                </Toolbar>
                {productsInCart.length > 0 ?
                    <ScrollView>
                        <View style={styles.itemHeadingContainer}>
                            <Text style={styles.boldText}>Items({productsInCart.length})</Text>
                            <Text style={styles.boldText}>Total: {renderCurrency()} {this.renderTotalPrice(productsInCart)}</Text>
                        </View>
                        {this.renderCartItems(productsInCart)}
                        <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                            <Text style={styles.boldText}>Price Details</Text>
                        </View>
                        <PriceDetails
                            handleRenderTotalPrice={this.renderTotalPrice}
                            productsInCart={productsInCart} />
                        <Button
                            title='Place Order'
                            backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                            onPress={this.onPlaceOrder}/>
                    </ScrollView>
                    :
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Nothing in your bag</Text>
                    </View>
               }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    productsInCart: state.cart.productsInCart,
    form: state.form
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => dispatch(removeFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
