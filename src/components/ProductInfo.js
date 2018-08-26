import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class ProductInfo extends Component<{}> {

    render() {
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productDetailsTitle}>DETAILS</Text>
              <Text style={styles.productDetialsDesc}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
              </Text>
          </View>
        );
    }
}

export default ProductInfo;
