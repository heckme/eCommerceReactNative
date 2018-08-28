import React, {Component} from "react";
import {Text, View} from "react-native";

import CategoryListItem from "./CategoryListItem";

import styles from "./../styles/styles";

const defaultProps = {
    handleSlideSubCategory: () => {}
}

class CategoryList extends Component<{}> {

    renderCategoryItems = (categories) => {
        return categories.map(category => (
            <CategoryListItem
                itemName={category.categoryName}
                iconName={category.iconName}
                key={category.id}
                style={styles.paddingTop8}
                onPress={() => this.handleUpdateSubCategoriesList(category)} />
        ));
    }

    handleUpdateSubCategoriesList = (category) => {
        if (category.subCategories.length > 0) {
            this.props.handleUpdateSubCategoriesList(category.subCategories);
        } else {
            this.props.onPressMenuItem(category.categoryName);
        }
    }

    render() {
        const {categories} = this.props;
        return (
          <View>
                {this.renderCategoryItems(categories)}
          </View>
        );
    }
}

CategoryList.defaultProps = defaultProps;

export default CategoryList;
