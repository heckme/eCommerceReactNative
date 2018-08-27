import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import { Button } from "react-native-elements";

import FlexButton from "./../components/FlexButton";
import AddressComponent from "./../components/AddressComponent";
import DeliveryEstimate from "./../components/DeliveryEstimate";
import OrderSummery from "./../components/OrderSummery";
import Toolbar from "./../components/Toolbar";

import styles from "./../styles/styles";

class ConfirmOrder extends Component<{}> {

    render() {
        return (
            <View style={styles.confirmContainer}>
                <Toolbar>
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Confirm</Text>
                    </View>
                </Toolbar>
                <ScrollView>
                    <View style={styles.itemHeadingContainer}>
                        <Text style={styles.boldText}>Confirm Address</Text>
                    </View>
                    <AddressComponent />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Estimated Delivery Time</Text>
                    </View>
                    <DeliveryEstimate />
                    <View style={[styles.itemHeadingContainer, styles.noPaddingTop]}>
                        <Text style={styles.boldText}>Order Summery</Text>
                    </View>
                    <OrderSummery />
                    <Button
                        title="Comfirm Order"
                        backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                        onPress={() => console.log("confirm order")}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);
