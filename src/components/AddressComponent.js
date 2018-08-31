import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements"

import styles from "./../styles/styles";

const defaultProps = {
    address: {}
}

class AddressComponent extends Component<{}> {

    render() {
        const {address} = this.props;
        return (
            <View style={[styles.priceDetailContainer]}>
                <Text style={styles.addressText}>
                    {address.streetAddress}, {address.locality}, {address.city}, {address.pincode}, {address.state}
                </Text>
                <View style={[styles.rowContainer, {justifyContent: "space-between", paddingTop: 16, paddingBottom: 16}]}>
                    <Button
                        onPress={this.props.handleEditAddress}
                        title="Edit Address"
                        backgroundColor="#efefef"
                        raised
                        textStyle={{color: "#000000"}}
                        />

                    <Button
                        onPress={this.props.handleAddNewAddress}
                        title="Add New Address"
                        backgroundColor="#efefef"
                        raised
                        textStyle={{color: "#000000"}}
                        />
                </View>
            </View>
        );
    }
}

AddressComponent.defaultProps = defaultProps;

export default AddressComponent;
