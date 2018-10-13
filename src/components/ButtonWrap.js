import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, TouchableNativeFeedback} from "react-native";

import styles from "../styles/styles";

const propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func
};

const defaultProps = {
    style: {},
    onPress: () => {}
};

class ButtonWrap extends Component<{}> {
    render() {
        const {children, onPress, style} = this.props;
        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View style={[styles.buttonWrapContainer, style]}>
                    {children}
                </View>
            </TouchableNativeFeedback>
        );
    }
}

ButtonWrap.defaultProps = defaultProps;

ButtonWrap.propTypes = propTypes;

export default ButtonWrap;
