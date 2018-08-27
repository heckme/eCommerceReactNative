import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import styles from "./../styles/styles";

class CartItem extends Component<{}> {

    render() {
        return (
          <View style={styles.cartItemContainer}>
              <View style={styles.rowContainer}>
                  <View style={styles.column4}>
                      <Image resizeMode="contain" style={styles.cartImageStyle} source={require('./../assets/product_2.jpg')} />
                  </View>
                  <View style={styles.column8}>
                      <Text style={styles.itemTitle}>FabAlley Women Gray Classic Fit Casul Top</Text>
                      <Text style={styles.itemSoldBy}>Sold by: Funfash</Text>
                      <Text style={styles.itemInStock}>Only 1 units in stocks</Text>
                      <Text style={styles.itemPrice}>$999</Text>
                  </View>
              </View>
              <View style={styles.removeCartItemCont}>
                  <TouchableOpacity onPress={() => console.log("item remove")}>
                      <Text style={styles.removeCartItemText}>Remove</Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }
}

export default CartItem;
