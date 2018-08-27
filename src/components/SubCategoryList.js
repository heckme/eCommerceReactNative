import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";

import styles from "./../styles/styles";

class SubCategoryList extends Component<{}> {

    render() {
        return (
          <View>
              <TouchableNativeFeedback onPress={() => this.props.onPressMenuItem("brands")}>
                  <View>
                      <Text style={styles.subCatListItem}>Brands</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => console.log("item pressed")}>
                  <View>
                      <Text style={styles.subCatListItem}>Shoes</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => console.log("item pressed")}>
                  <View>
                      <Text style={styles.subCatListItem}>Inner Wear</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => console.log("item pressed")}>
                  <View>
                      <Text style={styles.subCatListItem}>Formal Shirts</Text>
                  </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => console.log("item pressed")}>
                  <View>
                      <Text style={styles.subCatListItem}>Jeans</Text>
                  </View>
              </TouchableNativeFeedback>
          </View>
        );
    }
}

export default SubCategoryList;
