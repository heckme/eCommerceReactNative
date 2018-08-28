import React, {Component} from "react";
import {Text, View, ScrollView, Animated, TouchableNativeFeedback} from "react-native";
import {Icon} from "react-native-elements";

import MenuIcon from "./MenuIcon";
import UserInformation from "./UserInformation";
import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";

import styles from "./../styles/styles";

class Sidebar extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            slideValue: new Animated.Value(300),
            categories: [],
            subCategories: [],
            subcategoryHeading: ""
        }
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
        });
        this._toggleSubCategory();
    }

    _toggleSubCategory = () => {
          let toValue = 300;

          if(this.isSubCategoryHidden) toValue = 0;

          Animated.timing(
              this.state.slideValue,
              {
                toValue: toValue,
                duration: 250
              }
          ).start();

          this.isSubCategoryHidden = !this.isSubCategoryHidden;
    }

    render() {
        return (
            <View style={styles.sidebarContainer}>
                <ScrollView>
                    <UserInformation />
                    <CategoryList
                        handleUpdateSubCategoriesList={this.updateSubCategoriesList}
                        categories={this.state.categories}
                        onPressMenuItem={this.props.onPressMenuItem} />
                </ScrollView>
                <Animated.View style={[styles.subCategoryContainer, {transform: [{translateX: this.state.slideValue}]}]}>
                    <View style={styles.subCatHeader}>
                        <MenuIcon
                            name="arrow-left"
                            size={32}
                            onPress={this._toggleSubCategory}/>
                        <Text style={styles.categoryTitle}>{this.state.subcategoryHeading}</Text>
                    </View>
                    <ScrollView>
                        <SubCategoryList
                            subCategories={this.state.subCategories}
                            onPressMenuItem={this.props.onPressMenuItem}/>
                    </ScrollView>
                </Animated.View>
            </View>
        );
    }
}

export default Sidebar;
