import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";

import styles from "./../styles/styles";

const defaultProps = {
    size: ""
}

class ProductSize extends Component<{}> {

    renderSizeAlias = (size) => {
        switch (size.trim()) {
            case "small":
                return "S";
            case "medium":
                return "M";
            case "large":
                return "L";
            case "extra-large":
                return "XL";
        }
    }

    renderSizeButton = (sizeAvailable) => {
        return sizeAvailable.map(size => (
            <TouchableOpacity key={size} onPress={()=> this.props.handleProductSize(size)}>
                <View style={[styles.circularCont, this.props.size === size ? styles.activeSize: {}]}>
                    <Text style={this.props.size === size ? styles.activeSizeText: {}}>{this.renderSizeAlias(size)}</Text>
                </View>
            </TouchableOpacity>
        ));
    }

    render() {
        const {sizeAvailable} = this.props;
        return (
          <View style={styles.productDetailContainer}>
              <Text style={styles.productSize}>Size</Text>
              <View style={styles.sizeContainer}>
                  {this.renderSizeButton(sizeAvailable)}
              </View>
          </View>
        );
    }
}

ProductSize.defaultProps = defaultProps;

export default ProductSize;
