import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";

import styles from "../styles/styles";

const propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string
};

const defaultProps = {
    onPress: () => {},
    name: "",
    size: 23,
    color: "#000000"
};

class MenuIcon extends Component<{}> {

    render() {
        const {onPress, name, size, color} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.menuIconContainer}>
                    <Icon
                        name={name}
                        type="material-community"
                        size={size}
                        color={color} />
                </View>
            </TouchableOpacity>
        );
    }
}

MenuIcon.defaultProps = defaultProps;

MenuIcon.propTypes = propTypes;

export default MenuIcon;
