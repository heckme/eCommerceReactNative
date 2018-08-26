import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./../styles/styles";

const defaultProps = {
  name: "",
  style: {},
  iconName: "",
  iconSize: 12,
  iconColor: "#000000",
  iconType: "material-community",
  onPress: () => {}
}

class FlexButton extends Component<{}> {

    render() {
        return (
          <TouchableNativeFeedback onPress={this.props.onPress}>
              <View style={[styles.flexButtonContainer, this.props.style]}>
                  {this.props.iconName !== "" &&
                      <Icon
                        name={this.props.iconName}
                        type={this.props.iconType}
                        size={this.props.iconSize}
                        color={this.props.iconColor}/>
                  }
                  <Text style={styles.flexButtonText}>{this.props.name}</Text>
              </View>
          </TouchableNativeFeedback>
        );
    }
}

FlexButton.defaultProps = defaultProps;

export default FlexButton;
