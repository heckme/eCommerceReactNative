import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class StickyFooter extends Component<{}> {

    render() {
        return (
          <View style={styles.stickyFooterContainer}>
              {this.props.children}
          </View>
        );
    }
}

export default StickyFooter;
