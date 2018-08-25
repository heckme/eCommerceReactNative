import React, {Component} from "react";
import {Text, View} from "react-native";
import {Icon} from 'react-native-elements'

import styles from "./../styles/styles";

class MenuIcon extends Component<{}> {

    render() {
        return (
          <View style={styles.menuIconContainer}>
              <Icon
                  name='menu'
                  type='material-community'
                  size={36}
                  color='#000000'/>
          </View>
        );
    }
}

export default MenuIcon;
