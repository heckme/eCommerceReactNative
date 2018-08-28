import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";

import styles from "./../styles/styles";

class SubCategoryList extends Component<{}> {

    renderSubCategoryItems = (subCategories) => {
        return subCategories.map(subCategory => (
            <TouchableNativeFeedback key={subCategory.subCategoryName} onPress={() => this.props.onPressMenuItem(subCategory.subCategoryName)}>
                <View>
                    <Text style={styles.subCatListItem}>{subCategory.subCategoryName}</Text>
                </View>
            </TouchableNativeFeedback>
        ))
    }

    render() {
        const {subCategories} = this.props;
        return (
          <View>
              {this.renderSubCategoryItems(subCategories)}
          </View>
        );
    }
}

export default SubCategoryList;
