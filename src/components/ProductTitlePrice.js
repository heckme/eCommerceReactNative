import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View} from "react-native";

import {renderCurrency, calculateDiscount} from "../utils";

import styles from "../styles/styles";

const propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    brand: PropTypes.string,
    discount: PropTypes.number,
    desc: PropTypes.string
};

const defaultProps = {
    name: "",
    price: "",
    brand: "",
    discount: 0,
    desc: ""
};

class ProductTitlePrice extends Component<{}> {

    render() {
        const {discount, price, brand, name, desc} = this.props;

        let calcDiscount;
        if (discount > 0) {
            calcDiscount = calculateDiscount(price, discount);
        }
        return (
            <View style={styles.productDetailContainer}>
                <Text style={styles.productTitle}>{brand} {name}</Text>
                <View style={[styles.flexRow, styles.alignCenter]}>
                    <Text style={styles.cardTextSubtitle}>
                        {renderCurrency()} {calcDiscount ? Math.round(price - calcDiscount) : price}
                    </Text>
                    {calcDiscount
                        && (
                            <View style={styles.flexRow}>
                                <Text style={[styles.cardTextOriginalPrice, styles.lineThrough]}>
                                    {renderCurrency()} {price}
                                </Text>
                                <Text style={[styles.cardTextOriginalPrice, styles.redColorText]}>
                                    {discount}% OFF
                                </Text>
                            </View>
                        )
                    }
                </View>
                <Text>{desc}</Text>
            </View>
        );
    }
}

ProductTitlePrice.defaultProps = defaultProps;

ProductTitlePrice.propTypes = propTypes;

export default ProductTitlePrice;
