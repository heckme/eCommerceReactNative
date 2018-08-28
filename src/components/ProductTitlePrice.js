import React, {Component} from "react";
import {Text, View} from "react-native";

import {renderCurrency} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    title: "The black leather bag",
    price: "$199"
}
class ProductTitlePrice extends Component<{}> {

    render() {
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productTitle}>{this.props.title}</Text>
              <Text style={styles.productPrice}>{renderCurrency()} {this.props.price}</Text>
              <Text>{this.props.desc}</Text>
          </View>
        );
    }
}

ProductTitlePrice.defaultProps = defaultProps;

export default ProductTitlePrice;
