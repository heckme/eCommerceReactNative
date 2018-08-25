import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import { SearchBar } from "react-native-elements";

import ProductList from "./../components/ProductList";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";

import styles from "./../styles/styles";

class Dashboard extends Component<{}> {

    onSearchChange = () => {
        console.log("text changed");
    }

    onClearSearch = () => {
        console.log("search clear");
    }

    render() {
        return (
            <View style={styles.dashboardContainer}>
                <Toolbar>
                    <MenuIcon />
                    <Text style={styles.appTitle}>E-Com</Text>
                </Toolbar>
                <SearchBar
                    clearIcon
                    showLoadingIcon={false}
                    lightTheme
                    onChangeText={this.onSearchChange}
                    onClearText={this.onClearSearch}
                    placeholder='Type Here...' />
                <ProductList />
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
