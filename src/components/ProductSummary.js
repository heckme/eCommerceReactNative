import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

const defaultProps = {
    summary: ""
}
class ProductSummary extends Component<{}> {

    render() {
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productDetailsTitle}>DETAILS</Text>
              <Text style={styles.productDetialsDesc}>
                  {this.props.summary}
              </Text>
          </View>
        );
    }
}

ProductSummary.defaultProps = defaultProps;

export default ProductSummary;
