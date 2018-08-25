import React, {Component} from "react";
import {Text, View, TextInput} from "react-native";

import styles from "./../styles/styles";

class Searchbar extends Component<{}> {


    render() {
        return (
          <View style={styles.searchbarContainer}>
              <TextInput
                style={styles.searchbarTextInput}
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={(text) => this.setState({text})}
                placeholder = "Search"
                placeholderTextColor = "#666666"
                onChangeText={this.props.onVenueChange}
              />

          </View>
        );
    }
}

export default Searchbar;
