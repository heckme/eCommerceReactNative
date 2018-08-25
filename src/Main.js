import {connect} from "react-redux";
import React, {Component} from "react";
import {StatusBar, Text, View} from "react-native";

import Routes from "./config/Routes";

import styles from "./styles/styles";

class Main extends Component<{}> {

    componentDidMount() {
        this.autoLogin();
    }

    autoLogin = () => {}

    render() {

        return (
            <View style={styles.appContainer}>
                <StatusBar backgroundColor="#e0e0e0" barStyle="dark-content"/>
                <Routes/>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
