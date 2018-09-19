import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import {BASE_URL} from "./../config/settings";
import {renderCurrency, calculateDiscount} from "./../utils";

import styles from "./../styles/styles";

class CartItem extends Component<{}> {

    render() {
        const {product} = this.props;
        let discount;
        if (parseFloat(product.discount) && parseFloat(product.discount) > 0) {
            discount = calculateDiscount(parseFloat(product.price), parseFloat(product.discount));
        }
        const thumbnail = product.thumbnail.split("/");
        const thumbnailUrl = `${BASE_URL}/${thumbnail[1]}/${thumbnail[2]}`;
        return (
          <View style={styles.cartItemContainer}>
              <View style={styles.rowContainer}>
                  <View style={styles.column4}>
                      <Image resizeMode="contain" style={styles.cartImageStyle} source={{uri: thumbnailUrl}} />
                  </View>
                  <View style={styles.column8}>
                      <Text style={styles.itemTitle}>{product.productName}</Text>
                      <Text style={styles.itemSoldBy}>{product.category}</Text>
                      <Text style={styles.itemInStock}>Only 1 units in stocks</Text>
                      <Text style={styles.itemPrice}>{renderCurrency()} {discount ? Math.floor(parseFloat(product.price) - discount) : parseFloat(product.price)}</Text>
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
