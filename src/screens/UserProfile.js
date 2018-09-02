import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback} from "react-native";
import {Avatar, List, ListItem, Icon} from "react-native-elements";

import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateBack, navigateTo} from "./../utils";

import styles from "./../styles/styles";

class UserProfile extends Component<{}> {

    render() {
        const list = [
            {
              name: "My Orders",
              icon: (<Icon
                        containerStyle={styles.iconPadding}
                        name="package-variant"
                        type="material-community"
                        size={32}
                        color='#cccccc'/>
                  )
            }
        ]
        return (
            <View style={styles.profileContainer}>
                <Toolbar>
                    <MenuIcon name="arrow-left" size={24} onPress={navigateBack}/>
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>Profile</Text>
                    </View>
                </Toolbar>
                <View style={styles.userDetailsCont}>
                    <View style={[styles.userInfoContainer, styles.alignCenter]}>
                        <Avatar
                            rounded
                            large
                            source={{uri: "https://scontent-bom1-1.xx.fbcdn.net/v/t31.0-8/26172351_1737346609673576_6597650337487984451_o.jpg?_nc_cat=0&oh=3943a6edd5f7b283863820e4066caecb&oe=5C34E98A"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}/>
                        <View style={styles.userNameCont}>
                            <Text style={styles.userNameText}>Vineet Mishra</Text>
                        </View>
                    </View>
                    <List containerStyle={{marginBottom: 20}}>
                        {
                          list.map((l) => (
                            <TouchableNativeFeedback  onPress={() => navigateTo("myOrders")} key={l.name}>
                                <ListItem
                                    leftIcon={l.icon}
                                    title={l.name} />
                            </TouchableNativeFeedback>
                          ))
                        }
                    </List>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
