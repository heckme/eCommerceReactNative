import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View} from "react-native";

import {renderCurrency} from "../utils";

import styles from "../styles/styles";

const propTypes = {
    productsInCart: PropTypes.array,
    handleRenderOriginalPrice: PropTypes.func,
    handleRenderOfferPrice: PropTypes.func
};

const defaultProps = {
    productsInCart: [],
    handleRenderOriginalPrice: () => {},
    handleRenderOfferPrice: () => {}
};

class PriceDetails extends Component<{}> {

    render() {
        const {productsInCart, handleRenderOriginalPrice, handleRenderOfferPrice} = this.props;
        const totalOriginalPrice = handleRenderOriginalPrice(productsInCart);
        const totalOfferPrice = handleRenderOfferPrice(productsInCart);
        const discount = totalOriginalPrice - totalOfferPrice;
        return (
            <View style={styles.priceDetailContainer}>
                <View style={styles.itemHeadingContainer}>
                    <Text>Bag Total</Text>
                    <Text>{renderCurrency()} {totalOriginalPrice}</Text>
                </View>
                <View style={[styles.itemHeadingContainer, styles.borderTop]}>
                    <Text>Bag Discount</Text>
                    <Text>- {renderCurrency()} {discount}</Text>
                </View>
                <View style={[styles.itemHeadingContainer, styles.borderTop]}>
                    <Text>Sub Total</Text>
                    <Text>{renderCurrency()} {totalOfferPrice}</Text>
                </View>
                <View style={[styles.itemHeadingContainer, styles.borderTop]}>
                    <Text>Total Payable</Text>
                    <Text>{renderCurrency()} {totalOfferPrice}</Text>
                </View>
            </View>
        );
    }
}

PriceDetails.defaultProps = defaultProps;

PriceDetails.propTypes = propTypes;

export default PriceDetails;
