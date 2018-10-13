import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";

import styles from "../styles/styles";

const propTypes = {
    size: PropTypes.size,
    handleProductSize: PropTypes.func,
    sizeAvailable: PropTypes.array
};

const defaultProps = {
    size: "",
    handleProductSize: () => {},
    sizeAvailable: []
};

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
            default:
                return "";
        }
    }

    renderSizeButton = (sizeAvailable) => {
        const {handleProductSize, size} = this.props;
        return sizeAvailable.map(avlSize => (
            <TouchableOpacity key={avlSize} onPress={() => handleProductSize(avlSize)}>
                <View style={[styles.circularCont, size === avlSize && styles.activeSize]}>
                    <Text style={size === avlSize && styles.activeSizeText}>{this.renderSizeAlias(avlSize)}</Text>
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

ProductSize.propTypes = propTypes;

export default ProductSize;
