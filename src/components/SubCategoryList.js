import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback, LayoutAnimation, UIManager} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./../styles/styles";

class SubCategoryList extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            isListHidden: true,
            listName: ""
        }
    }

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    renderAccordianList = (list) => {
        return list.map((item, index) => {
            return (
                <View key={index}>
                   <TouchableNativeFeedback
                       onPress={() => this.props.onPressMenuItem("subSubCategory" ,item.subCategoryTwoAlias)}>
                       <View style={styles.subCategoryItemHeight}>
                           <Text style={styles.subCatTwoListItem}>{item.subCategoryTwoName}</Text>
                       </View>
                   </TouchableNativeFeedback>
                </View>
            );
        });
    }

    _toggleList = (listName) => {
        if (listName !== this.state.listName) {
            this.setState({
                listName,
                isListHidden: false
            }, () => {
                this._animate();
            });
        } else {
            this.setState({
                isListHidden: !this.state.isListHidden,
            }, () => {
                this._animate();
            });
        }
    }

    renderSubCategoryItems = (subCategories) => {
        return subCategories.map(subCategory => {
            if (subCategory.hasOwnProperty("subCategoriesTwo") && subCategory.subCategoriesTwo.length > 0) {
                return (
                    <View key={subCategory.subCategoryName} style={{position: "relative"}}>
                        <TouchableNativeFeedback
                            onPress={() => this._toggleList(subCategory.subCategoryName)}>
                            <View style={[styles.relativeCont, styles.subCategoryItemHeight]}>
                                <Text style={[styles.subCatListItem, (this.state.listName === subCategory.subCategoryName && !this.state.isListHidden) ? styles.boldText : {}]}>{subCategory.subCategoryName}</Text>
                                <Icon
                                    name={(this.state.listName === subCategory.subCategoryName && !this.state.isListHidden) ? "chevron-down" : "chevron-up"}
                                    type="material-community"
                                    size={24}
                                    containerStyle={styles.listCaretIcon}
                                    color="#333333" />
                            </View>
                        </TouchableNativeFeedback>
                        {true &&
                          <View style={(this.state.listName === subCategory.subCategoryName && !this.state.isListHidden) ? {} : styles.listItemActive }>
                            {this.renderAccordianList(subCategory.subCategoriesTwo)}
                          </View>
                        }
                    </View>
                )
            } else {
                return (
                    <TouchableNativeFeedback
                        key={subCategory.subCategoryName}
                        onPress={() => this.props.onPressMenuItem("subCategory", subCategory.subCategoryAlias)}>
                        <View style={[styles.subCategoryItemHeight]}>
                            <Text style={styles.subCatListItem}>{subCategory.subCategoryName}</Text>
                        </View>
                    </TouchableNativeFeedback>
                )
            }
        });
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
