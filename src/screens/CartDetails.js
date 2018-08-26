import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./../styles/styles";

class CartDetails extends Component<{}> {

    render() {
        return (
          <View style={styles.cartContainer}>
              <Text>I am cart page</Text>
          </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
