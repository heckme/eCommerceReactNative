import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import {renderCurrency} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    totalPrice: 0,
    discount: 0
}
class PriceDetails extends Component<{}> {

    render() {
        const {totalPrice, discount} = this.props;
        return (
          <View style={styles.priceDetailContainer}>
              <View style={styles.itemHeadingContainer}>
                  <Text>Bag Total</Text>
                  <Text>{renderCurrency()} {parseFloat(totalPrice)}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Bag Discount</Text>
                  <Text>- {renderCurrency()} {discount}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Sub Total</Text>
                  <Text>{renderCurrency()} {totalPrice - discount}</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Total Payable</Text>
                  <Text>{renderCurrency()} {totalPrice - discount}</Text>
              </View>
          </View>
        );
    }
}

PriceDetails.defaultProps = defaultProps;

export default PriceDetails;
