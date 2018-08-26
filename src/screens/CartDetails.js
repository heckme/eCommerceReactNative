import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import { Button } from 'react-native-elements';

import Toolbar from "./../components/Toolbar";
import CartItem from "./../components/CartItem";
import PriceDetails from "./../components/PriceDetails";
import {navigateTo} from "./../utils";

import styles from "./../styles/styles";

class CartDetails extends Component<{}> {

    render() {
        return (
            <View  style={styles.cartContainer}>
                <Toolbar>
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Bag</Text>
                    </View>
                </Toolbar>
                <ScrollView>
                    <View style={styles.itemHeadingContainer}>
                        <Text style={styles.boldText}>Items(2)</Text>
                        <Text style={styles.boldText}>Total: $1209</Text>
                    </View>
                    <CartItem />
                    <CartItem />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Price Details</Text>
                    </View>
                    <PriceDetails />
                    <Button
                        title='Place Order'
                        backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                        onPress={() => navigateTo("addressDetails")}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
