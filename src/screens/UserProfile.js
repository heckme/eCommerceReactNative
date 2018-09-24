import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, TouchableNativeFeedback, ActivityIndicator} from "react-native";
import {Avatar, List, ListItem, Icon} from "react-native-elements";

import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateBack, navigateTo} from "./../utils";
import {logoutUser} from "./../actions";

import styles from "./../styles/styles";

class UserProfile extends Component<{}> {

    logoutUser = () => {
        this.props.logoutUser(this.props.token);
    }

    render() {
        const {loader} = this.props;

        const myOrderIcon = (<Icon
                  containerStyle={styles.iconPadding}
                  name="package-variant"
                  type="material-community"
                  size={32}
                  color='#cccccc'/>
              );

        const logoutIcon = (<Icon
                  containerStyle={styles.iconPadding}
                  name="logout-variant"
                  type="material-community"
                  size={32}
                  color='#cccccc'/>
              );

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
                        <TouchableNativeFeedback  onPress={() => navigateTo("myOrders")}>
                            <ListItem
                                leftIcon={myOrderIcon}
                                title="My Orders" />
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback  onPress={this.logoutUser}>
                            <ListItem
                                leftIcon={logoutIcon}
                                title={loader ? <ActivityIndicator color="#7468c5" /> : "Logout"} />
                        </TouchableNativeFeedback>
                    </List>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.app.token,
    loader: state.utils.loader
});

const mapDispatchToProps = dispatch => ({
    logoutUser: token => dispatch(logoutUser(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
