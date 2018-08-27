import React, {Component} from "react";
import {Text, View} from "react-native";

import CategoryListItem from "./CategoryListItem";

import styles from "./../styles/styles";

const defaultProps = {
    handleSlideSubCategory: () => {}
}

class CategoryList extends Component<{}> {

    render() {
        return (
          <View>
                <CategoryListItem
                    itemName="Men"
                    iconName="human-male"
                    style={styles.paddingTop8}
                    onPress={this.props.handleSlideSubCategory} />
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

CategoryList.defaultProps = defaultProps;

export default CategoryList;
