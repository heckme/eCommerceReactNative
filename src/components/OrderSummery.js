import React, {Component} from "react";
import {Text, View} from "react-native";

import {renderCurrency} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    totalPrice: "",
    deliveryCharges: 0
}

class OrderSummery extends Component<{}> {

    render() {
        const {totalPrice, deliveryCharges, totalItems} = this.props;
        return (
          <View style={styles.priceDetailContainer}>
              <Text style={styles.summeryItemsText}>{totalItems} {totalItems > 1 ? "ITEMS" : "ITEM"}</Text>
              <View style={styles.itemHeadingContainer}>
                  <Text>Order Total</Text>
                  <Text>{renderCurrency()} {totalPrice}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Delivery</Text>
                  <Text>{deliveryCharges > 0 && renderCurrency()} {deliveryCharges <= 0 ? "Free" : deliveryCharges}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Total Payable</Text>
                  <Text>{renderCurrency()} {totalPrice - deliveryCharges}</Text>
              </View>
          </View>
        );
    }
}

OrderSummery.defaultProps = defaultProps;

export default OrderSummery;
