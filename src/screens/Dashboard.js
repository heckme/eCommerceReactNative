import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    render() {

        return (
            <View>
                <Text>Dashboard</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
