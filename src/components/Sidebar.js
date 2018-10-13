import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, ScrollView, Animated} from "react-native";

import MenuIcon from "./MenuIcon";
import SidebarHeader from "./SidebarHeader";
import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";

import styles from "../styles/styles";

const propTypes = {
    categories: PropTypes.array,
    handleNavigateToUserProfile: PropTypes.func,
    onPressMenuItem: PropTypes.func
};

const defaultProps = {
    categories: [],
    handleNavigateToUserProfile: () => {},
    onPressMenuItem: () => {}
};

class Sidebar extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            slideValue: new Animated.Value(300),
            categories: [],
            subCategories: [],
            subcategoryHeading: ""
        };
        this.isSubCategoryHidden = true;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories.length > 0) {
            this.setState({
                categories: nextProps.categories
            });
        }
    }

    updateSubCategoriesList = (subcategoryHeading, subCategories) => {
        this.setState({
            subcategoryHeading,
            subCategories
        }, () => {
            this._toggleSubCategory();
        });
    }

    _toggleSubCategory = () => {
        const {slideValue} = this.state;
        let toValue = 300;
        if (this.isSubCategoryHidden) toValue = 0;
        Animated.timing(
            slideValue,
            {
                toValue,
                duration: 250
            }
        ).start();
        this.isSubCategoryHidden = !this.isSubCategoryHidden;
    }

    render() {
        const {handleNavigateToUserProfile, onPressMenuItem} = this.props;
        const {categories, slideValue, subcategoryHeading, subCategories} = this.state;
        return (
            <View style={styles.sidebarContainer}>
                <ScrollView>
                    <SidebarHeader
                        handleNavigateToUserProfile={handleNavigateToUserProfile} />
                    <CategoryList
                        handleUpdateSubCategoriesList={this.updateSubCategoriesList}
                        categories={categories}
                        onPressMenuItem={onPressMenuItem} />
                </ScrollView>
                <Animated.View style={[styles.subCategoryContainer, {transform: [{translateX: slideValue}]}]}>
                    <View style={styles.subCatHeader}>
                        <MenuIcon
                            name="arrow-left"
                            size={24}
                            onPress={this._toggleSubCategory} />
                        <Text style={styles.categoryTitle}>{subcategoryHeading}</Text>
                    </View>
                    <ScrollView>
                        <SubCategoryList
                            subCategories={subCategories}
                            onPressMenuItem={onPressMenuItem} />
                    </ScrollView>
                </Animated.View>
            </View>
        );
    }
}

Sidebar.defaultProps = defaultProps;

Sidebar.propTypes = propTypes;

export default Sidebar;
