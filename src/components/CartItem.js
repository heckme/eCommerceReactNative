import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity} from "react-native";

import {BASE_URL} from "../config/settings";
import {renderCurrency, calculateDiscount} from "../utils";

import styles from "../styles/styles";

const propTypes = {
    product: PropTypes.object,
    handleRemoveProductFromCart: PropTypes.func
};

const defaultProps = {
    product: {},
    handleRemoveProductFromCart: () => {}
};

class CartItem extends Component<{}> {

    render() {
        const {product, handleRemoveProductFromCart} = this.props;
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
                        <Text style={styles.itemSoldBy}>{product.brand}</Text>
                        {product.selectedSize
                            && (
                                <Text
                                    style={styles.itemSoldBy}>
                                    Selected size: {product.selectedSize[0].toUpperCase() + product.selectedSize.substr(1)}
                                </Text>
                            )
                        }
                        <Text style={styles.itemInStock}>Only 1 units in stocks</Text>
                        <Text
                            style={styles.itemPrice}>
                            {renderCurrency()} {discount ? Math.floor(parseFloat(product.price) - discount) : parseFloat(product.price)}
                        </Text>
                    </View>
                </View>
                <View style={styles.removeCartItemCont}>
                    <TouchableOpacity onPress={() => handleRemoveProductFromCart(product)}>
                        <Text style={styles.removeCartItemText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

CartItem.defaultProps = defaultProps;

CartItem.propTypes = propTypes;

export default CartItem;
