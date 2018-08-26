import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class ProductTitlePrice extends Component<{}> {

    render() {
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productTitle}>The black leather bag</Text>
              <Text style={styles.productPrice}>$199</Text>
          </View>
        );
    }
}

export default ProductTitlePrice;
