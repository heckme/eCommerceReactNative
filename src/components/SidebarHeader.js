import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Avatar, Icon} from "react-native-elements";

import styles from "./../styles/styles";

class SidebarHeader extends Component<{}> {

    render() {
        return (
          <TouchableNativeFeedback onPress={this.props.handleNavigateToUserProfile}>
              <View style={styles.userInfoContainer}>
                  <Avatar
                      rounded
                      large
                      source={{uri: "https://scontent-bom1-1.xx.fbcdn.net/v/t31.0-8/26172351_1737346609673576_6597650337487984451_o.jpg?_nc_cat=0&oh=3943a6edd5f7b283863820e4066caecb&oe=5C34E98A"}}
                      onPress={() => console.log("Works!")}
                      activeOpacity={0.7}/>
                  <View style={styles.userNameCont}>
                      <Text style={styles.userNameText}>Vineet Mishra</Text>
                      <Icon
                          name="chevron-right"
                          type='material-community'
                          size={24}
                          color="#ffffff" />
                  </View>
              </View>
          </TouchableNativeFeedback>
        );
    }
}

export default SidebarHeader;
