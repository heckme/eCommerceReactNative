import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "../styles/styles";

const propTypes = {
    summary: PropTypes.string
};

const defaultProps = {
    summary: ""
};

class ProductSummary extends Component<{}> {

    render() {
        const {summary} = this.props;
        return (
            <View style={styles.productDetailContainer}>
                <Text style={styles.productDetailsTitle}>DETAILS</Text>
                <Text style={styles.productDetialsDesc}>
                    {summary}
                </Text>
            </View>
        );
    }
}

ProductSummary.defaultProps = defaultProps;

ProductSummary.propTypes = propTypes;

export default ProductSummary;
