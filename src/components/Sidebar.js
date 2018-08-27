import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";

import UserInformation from "./UserInformation";
import CategoryList from "./CategoryList";

import styles from "./../styles/styles";

class Sidebar extends Component<{}> {

    render() {
        return (
            <View style={styles.sidebarContainer}>
                <ScrollView>
                    <UserInformation />
                    <CategoryList />
                </ScrollView>
            </View>
        );
    }
}

export default Sidebar;
