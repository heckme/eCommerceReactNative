import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class OrderSummery extends Component<{}> {

    render() {
        return (
          <View style={styles.priceDetailContainer}>
              <Text style={styles.summeryItemsText}>2 ITEMS</Text>
              <View style={styles.itemHeadingContainer}>
                  <Text>Order Total</Text>
                  <Text>$ 1200</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Delivery</Text>
                  <Text>-$ 100</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Total Payable</Text>
                  <Text>-$ 1300</Text>
              </View>
          </View>
        );
    }
}

export default OrderSummery;
