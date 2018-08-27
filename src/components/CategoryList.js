import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";

import CategoryListItem from "./CategoryListItem";

import styles from "./../styles/styles";

class CategoryList extends Component<{}> {

    render() {
        return (
          <View style={styles.categorylistContainer}>
                <CategoryListItem
                    itemName="Men"
                    iconName="human-male"
                    style={styles.paddingTop8} />
                <CategoryListItem
                    itemName="Women"
                    iconName="human-female" />
                <CategoryListItem
                    itemName="Kids"
                    iconName="human-child" />
                <CategoryListItem
                    itemName="Home & Living"
                    iconName="home" />
                <CategoryListItem
                    itemName="Gadgets"
                    iconName="headphones" />
          </View>
        );
    }
}

export default CategoryList;
