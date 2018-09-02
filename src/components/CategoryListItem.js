import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./../styles/styles";

const defaultProps = {
    style: {},
    itemName: "",
    iconName: "human-female",
    iconSize: 23,
    onPress: () => {}
}

class CategoryListItem extends Component<{}> {

    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={[styles.flexRow, styles.alignCenter, styles.listItemContainer, this.props.style]}>
                    <Icon
                        name={this.props.iconName}
                        type="material-community"
                        size={this.props.iconSize}
                        color='#000000'/>
                    <Text style={styles.menuListText}>{this.props.itemName}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

CategoryListItem.defaultProps = defaultProps;

export default CategoryListItem;
