import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Icon} from "react-native-elements";

import styles from "../styles/styles";

const propTypes = {
    name: PropTypes.string,
    style: PropTypes.object,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconType: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    textStyle: PropTypes.object
};

const defaultProps = {
    name: "",
    style: {},
    iconName: "",
    iconSize: 12,
    iconColor: "#000000",
    iconType: "material-community",
    onPress: () => {},
    disabled: false,
    textStyle: {}
};

class FlexButton extends Component<{}> {

    render() {
        const {iconName, onPress, disabled, style, iconType, iconSize, iconColor, textStyle, name} = this.props;
        return (
            <TouchableNativeFeedback onPress={onPress} disabled={disabled}>
                <View style={[styles.flexButtonContainer, style]}>
                    {iconName !== ""
                        && (
                            <Icon
                                name={iconName}
                                type={iconType}
                                size={iconSize}
                                color={iconColor} />
                        )
                    }
                    <Text style={[styles.flexButtonText, textStyle]}>{name}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

FlexButton.defaultProps = defaultProps;

FlexButton.propTypes = propTypes;

export default FlexButton;
