import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./../styles/styles";

const defaultProps = {
    handleClickIcon: () => {}
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
                      color='#000000'/>
              </View>
          </TouchableOpacity>
        );
    }
}

MenuIcon.defaultProps = defaultProps;

export default MenuIcon;
