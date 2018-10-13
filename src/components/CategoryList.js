import PropTypes from "prop-types";
import React, {Component} from "react";
import {View} from "react-native";

import CategoryListItem from "./CategoryListItem";

import styles from "../styles/styles";

const propTypes = {
    categories: PropTypes.array,
    handleUpdateSubCategoriesList: PropTypes.func,
    onPressMenuItem: PropTypes.func
};

const defaultProps = {
    categories: [],
    handleUpdateSubCategoriesList: () => {},
    onPressMenuItem: () => {}
};

class CategoryList extends Component<{}> {

    renderCategoryItems = (categories) => {
        return categories.map(category => (
            <CategoryListItem
                itemName={category.categoryName}
                iconName={category.iconName}
                key={category._id}
                style={styles.paddingTop8}
                onPress={() => this.handleUpdateSubCategoriesList(category)} />
        ));
    }

    handleUpdateSubCategoriesList = (category) => {
        const {handleUpdateSubCategoriesList, onPressMenuItem} = this.props;
        if (category.subCategories && category.subCategories.length > 0) {
            handleUpdateSubCategoriesList(category.categoryName, category.subCategories);
        } else {
            onPressMenuItem("category", category.categoryAlias);
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

CategoryList.propTypes = propTypes;

export default CategoryList;
