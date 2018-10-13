import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import {Button} from "react-native-elements";

import {navigateTo, renderOfferPrice} from "../utils";
import AddressComponent from "../components/AddressComponent";
import DeliveryEstimate from "../components/DeliveryEstimate";
import OrderSummery from "../components/OrderSummery";
import Toolbar from "../components/Toolbar";
import {resetAddressForm} from "../actions";

import styles from "../styles/styles";

class ConfirmOrder extends Component<{}> {

    onEditAddress = () => {
        navigateTo("addressDetails", {isEditAddress: true});
    }

    onAddNewAddress = () => {
        this.props.resetAddressForm();
        navigateTo("addressDetails", {isEditAddress: false});
    }

    render() {
        const {deliveryAddress: {address}, productsInCart} = this.props;
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
                        address={address} />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Estimated Delivery Time</Text>
                    </View>
                    <DeliveryEstimate productsInCart={productsInCart} />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Order Summery</Text>
                    </View>
                    <OrderSummery totalItems={productsInCart.length} totalPrice={renderOfferPrice(productsInCart)} />
                    <Button
                        title="Confirm Order"
                        backgroundColor="#7468c5"
                        buttonStyle={styles.marginBottom16}
                        onPress={() => console.log("confirm order")} />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    productsInCart: state.cart.productsInCart,
    deliveryAddress: state.deliveryAddress
});

const mapDispatchToProps = dispatch => ({
    resetAddressForm: () => dispatch(resetAddressForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);
