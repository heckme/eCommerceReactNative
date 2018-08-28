import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import {renderCurrency} from "./../utils";

import styles from "./../styles/styles";

class CartItem extends Component<{}> {

    render() {
        const {product} = this.props;
        return (
          <View style={styles.cartItemContainer}>
              <View style={styles.rowContainer}>
                  <View style={styles.column4}>
                      <Image resizeMode="contain" style={styles.cartImageStyle} source={require('./../assets/product_2.jpg')} />
                  </View>
                  <View style={styles.column8}>
                      <Text style={styles.itemTitle}>{product.productName}</Text>
                      <Text style={styles.itemSoldBy}>{product.productBrand}</Text>
                      <Text style={styles.itemInStock}>Only 1 units in stocks</Text>
                      <Text style={styles.itemPrice}>{renderCurrency()} {product.productPrice}</Text>
                  </View>
              </View>
              <View style={styles.removeCartItemCont}>
                  <TouchableOpacity onPress={() => this.props.handleRemoveProductFromCart(product)}>
                      <Text style={styles.removeCartItemText}>Remove</Text>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }
}

export default CartItem;
