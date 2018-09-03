import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";

import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateBack, navigateTo} from "./../utils";

import styles from "./../styles/styles";

class MyOrders extends Component<{}> {

    render() {
        return (
            <View style={styles.dashboardContainer}>
                <Toolbar>
                    <MenuIcon name="arrow-left" size={24} onPress={navigateBack}/>
                    <View style={styles.toolbarUtils}>
                        <Text style={styles.appTitle}>My Orders</Text>
                    </View>
                </Toolbar>
                <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                    <Text style={styles.appTitle}>No Active Orders</Text>
                </View>

                <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                    <Button
                        backgroundColor="#efefef"
                        raised
                        textStyle={{color: "#000000"}}
                        
                        title="Start Shopping"
                        onPress={() => navigateTo("dashboard")} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
