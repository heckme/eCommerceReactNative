import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView, LayoutAnimation, UIManager} from "react-native";
import { Button } from "react-native-elements";

import Toolbar from "./../components/Toolbar";
import CartItem from "./../components/CartItem";
import PriceDetails from "./../components/PriceDetails";
import {navigateTo, renderCurrency, calculateDiscount, renderOfferPrice, renderOriginalPrice} from "./../utils";
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
                key={product._id}/>
        ));
    }

    removeProductFromCart = (product) => {
        this.props.removeFromCart(product);
        this._animate();
    }

    onPlaceOrder = () => {
        const {deliveryAddress} = this.props;
        if(deliveryAddress && deliveryAddress.address && (Object.keys(deliveryAddress.address).length > 0)) {
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
                            <Text style={styles.boldText}>Total: {renderCurrency()} {renderOfferPrice(productsInCart)}</Text>
                        </View>
                        {this.renderCartItems(productsInCart)}
                        <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                            <Text style={styles.boldText}>Price Details</Text>
                        </View>
                        <PriceDetails
                            handleRenderOfferPrice={renderOfferPrice}
                            handleRenderOriginalPrice={renderOriginalPrice}
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
    deliveryAddress: state.deliveryAddress
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => dispatch(removeFromCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
