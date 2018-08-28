import React, {Component} from "react";
import {Text, View} from "react-native";

import {renderCurrency} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    title: "",
    price: "",
    brand: ""
}

class ProductTitlePrice extends Component<{}> {

    render() {
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productTitle}>{this.props.brand} {this.props.name}</Text>
              <Text style={styles.productPrice}>{renderCurrency()} {this.props.price}</Text>
              <Text>{this.props.desc}</Text>
          </View>
        );
    }
}

ProductTitlePrice.defaultProps = defaultProps;

export default ProductTitlePrice;
