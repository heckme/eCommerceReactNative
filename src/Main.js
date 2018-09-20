import {connect} from "react-redux";
import React, {Component} from "react";
import {StatusBar, Text, View} from "react-native";

import {checkAuthentication} from "./actions";
import Routes from "./config/Routes";

import styles from "./styles/styles";

class Main extends Component<{}> {

    componentDidMount() {
        //this.props.checkAuthentication(this.props.token);
    }

    render() {
        const {isLoggedin} = this.props;
        return (
            <View style={styles.appContainer}>
                <StatusBar backgroundColor="#e0e0e0" barStyle="dark-content"/>
                <Routes isLoggedin={isLoggedin} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    token: state.app.token,
    isLoggedin: state.app.isLoggedin
});

const mapDispatchToProps = dispatch => ({
    checkAuthentication: token => dispatch(checkAuthentication(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
