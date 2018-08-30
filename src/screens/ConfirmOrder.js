import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import { Button } from "react-native-elements";

import {navigateTo, calculateDiscount} from "./../utils";
import FlexButton from "./../components/FlexButton";
import AddressComponent from "./../components/AddressComponent";
import DeliveryEstimate from "./../components/DeliveryEstimate";
import OrderSummery from "./../components/OrderSummery";
import Toolbar from "./../components/Toolbar";
import {resetAddressForm} from "./../actions";

import styles from "./../styles/styles";

class ConfirmOrder extends Component<{}> {

    onEditAddress = () => {
        navigateTo("addressDetails");
    }

    onAddNewAddress = () => {
        this.props.resetAddressForm();
        navigateTo("addressDetails");
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

    render() {
        const {productsInCart, form: {address}} = this.props;
        return (
            <View style={styles.confirmContainer}>
                <Toolbar>
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Confirm</Text>
                    </View>
                </Toolbar>
                <ScrollView>
                    <View style={styles.itemHeadingContainer}>
                        <Text style={styles.boldText}>Confirm Address</Text>
                    </View>
                    <AddressComponent
                        handleAddNewAddress={this.onAddNewAddress}
                        handleEditAddress={this.onEditAddress}
                        address={address ? address.values : ""} />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Estimated Delivery Time</Text>
                    </View>
                    <DeliveryEstimate productsInCart={productsInCart} />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Order Summery</Text>
                    </View>
                    <OrderSummery totalItems={productsInCart.length} totalPrice={this.renderTotalPrice(productsInCart)} />
                    <Button
                        title="Comfirm Order"
                        backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                        onPress={() => console.log("confirm order")}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    productsInCart: state.cart.productsInCart,
    form: state.form
});

const mapDispatchToProps = dispatch => ({
    resetAddressForm: () => dispatch(resetAddressForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);
