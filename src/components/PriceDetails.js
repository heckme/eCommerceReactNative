import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import styles from "./../styles/styles";

class PriceDetails extends Component<{}> {

    render() {
        return (
          <View style={styles.priceDetailContainer}>
              <View style={styles.itemHeadingContainer}>
                  <Text>Bag Total</Text>
                  <Text>$ 1200</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Bag Discount</Text>
                  <Text>-$ 1,000</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Sub Total</Text>
                  <Text>-$ 200</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Delivery Charge</Text>
                  <Text>-$ 100</Text>
              </View>
              <View style={[styles.itemHeadingContainer,  styles.borderTop]}>
                  <Text>Total Payable</Text>
                  <Text>-$ 300</Text>
              </View>
          </View>
        );
    }
}

export default PriceDetails;
