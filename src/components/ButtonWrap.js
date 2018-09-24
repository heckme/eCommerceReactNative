import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./../styles/styles";

const defaultProps = {
  style: {},
  onPress: () => {}
}

class ButtonWrap extends Component<{}> {

    render() {
        return (
          <TouchableNativeFeedback onPress={this.props.onPress}>
              <View style={[styles.buttonWrapContainer, this.props.style]}>
                  {this.props.children}
              </View>
          </TouchableNativeFeedback>
        );
    }
}

ButtonWrap.defaultProps = defaultProps;

export default ButtonWrap;
