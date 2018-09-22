import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";

import {navigateTo} from "./../utils";
import MenuIcon from "./../components/MenuIcon";

import styles from "./../styles/styles";

class InitialScreen extends Component<{}> {

    render() {
        return (
            <View style={[styles.dashboardContainer, styles.justifyCenter]}>
                <MenuIcon name="cart-outline" size={102} color="#7468c5"/>
                <Text style={styles.heading1}>Making your first purchase?</Text>
                <Button
                    title="Login"
                    backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                    onPress={() => navigateTo("login")}/>
                <Button
                    title="Register"
                    backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                    onPress={() => navigateTo("signup")}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);
