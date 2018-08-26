import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";

import styles from "./../styles/styles";

const defaultProps = {
    size: ""
}

class ProductSize extends Component<{}> {

    render() {
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productSize}>Size</Text>
              <View style={styles.sizeContainer}>
                  <TouchableOpacity onPress={()=> this.props.handleProductSize("small")}>
                      <View style={[styles.circularCont, this.props.size === "small" ? styles.activeSize: {}]}>
                          <Text>S</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.props.handleProductSize("medium")}>
                      <View style={[styles.circularCont, this.props.size === "medium" ? styles.activeSize: {}]}>
                          <Text>M</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.props.handleProductSize("large")}>
                      <View style={[styles.circularCont, this.props.size === "large" ? styles.activeSize: {}]}>
                          <Text>L</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.props.handleProductSize("extraLarge")}>
                      <View style={[styles.circularCont, this.props.size === "extraLarge" ? styles.activeSize: {}]}>
                          <Text>XL</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
        );
    }
}

ProductSize.defaultProps = defaultProps;

export default ProductSize;
