import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./../styles/styles";

const defaultProps = {
    onPress: () => {},
    name: "",
    size: 23,
    color: "#000000"
}

class MenuIcon extends Component<{}> {

    render() {
        return (
          <TouchableOpacity onPress={this.props.onPress}>
              <View style={styles.menuIconContainer}>
                  <Icon
                      name={this.props.name}
                      type='material-community'
                      size={this.props.size}
                      color={this.props.color} />
              </View>
          </TouchableOpacity>
        );
    }
}

MenuIcon.defaultProps = defaultProps;

export default MenuIcon;
