import React, {Component} from "react";
import {Text, View} from "react-native";

import {renderCurrency, calculateDiscount} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    title: "",
    price: "",
    brand: "",
    discount: 0,
    desc: ""
}

class ProductTitlePrice extends Component<{}> {

    render() {
        let discount;
        if(this.props.discount > 0) {
            discount = calculateDiscount(this.props.price, this.props.discount);
        }
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productTitle}>{this.props.brand} {this.props.name}</Text>
              <View style={[styles.flexRow, styles.alignCenter]}>
                  <Text style={styles.cardTextSubtitle}>
                      {renderCurrency()} {discount ? Math.round(this.props.price - discount) : this.props.price}
                  </Text>
                  {discount &&
                      <View style={styles.flexRow}>
                          <Text style={[styles.cardTextOriginalPrice, styles.lineThrough]}>
                              {renderCurrency()} {this.props.price}
                          </Text>
                          <Text style={[styles.cardTextOriginalPrice, styles.redColorText]}>
                              {this.props.discount}% OFF
                          </Text>
                      </View>
                  }
              </View>
              <Text>{this.props.desc}</Text>
          </View>
        );
    }
}

ProductTitlePrice.defaultProps = defaultProps;

export default ProductTitlePrice;
