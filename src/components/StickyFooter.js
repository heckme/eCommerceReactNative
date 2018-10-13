import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class StickyFooter extends Component<{}> {

    render() {
        const {children} = this.props;
        return (
            <View style={styles.stickyFooterContainer}>
                {children}
            </View>
        );
    }
}

export default StickyFooter;
