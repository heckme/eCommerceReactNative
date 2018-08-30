import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import {renderCurrency} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    productsInCart: []
}
class PriceDetails extends Component<{}> {

    renderOriginalPrice = (productsInCart) => {
        return productsInCart.reduce((total, product) => {
            return total + product.productPrice
        }, 0)
    }

    render() {
        const {productsInCart} = this.props;
        const totalOriginalPrice = this.renderOriginalPrice(productsInCart);
        const totalOfferPrice = this.props.handleRenderTotalPrice(productsInCart)
        const discount = totalOriginalPrice - totalOfferPrice;
        return (
          <View style={styles.priceDetailContainer}>
              <View style={styles.itemHeadingContainer}>
                  <Text>Bag Total</Text>
                  <Text>{renderCurrency()} {totalOriginalPrice}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Bag Discount</Text>
                  <Text>- {renderCurrency()} {discount}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Sub Total</Text>
                  <Text>{renderCurrency()} {totalOfferPrice}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Total Payable</Text>
                  <Text>{renderCurrency()} {totalOfferPrice}</Text>
              </View>
          </View>
        );
    }
}

PriceDetails.defaultProps = defaultProps;

export default PriceDetails;
