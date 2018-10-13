import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Icon} from "react-native-elements";

import styles from "../styles/styles";

const propTypes = {
    style: PropTypes.object,
    itemName: PropTypes.string,
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    onPress: () => {}
};

const defaultProps = {
    style: {},
    itemName: "",
    iconName: "human-female",
    iconSize: 23,
    onPress: () => {}
};

class CategoryListItem extends Component<{}> {

    render() {
        const {onPress, iconName, iconSize, itemName, style} = this.props;
        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View style={[styles.flexRow, styles.alignCenter, styles.listItemContainer, style]}>
                    <Icon
                        name={iconName}
                        type="material-community"
                        size={iconSize}
                        color="#000000" />
                    <Text style={styles.menuListText}>{itemName}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

CategoryListItem.defaultProps = defaultProps;

CategoryListItem.propTypes = propTypes;

export default CategoryListItem;
