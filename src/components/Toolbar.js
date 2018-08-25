import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class Toolbar extends Component<{}> {

    render() {
        return (
          <View style={styles.toolbarContainer}>
              {this.props.children}
          </View>
        );
    }
}

export default Toolbar;
