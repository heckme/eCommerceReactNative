import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";

import styles from "../styles/styles";

const propTypes = {
    address: PropTypes.object,
    handleEditAddress: PropTypes.func,
    handleAddNewAddress: PropTypes.func
};

const defaultProps = {
    address: {},
    handleEditAddress: () => {},
    handleAddNewAddress: () => {}
};

class AddressComponent extends Component<{}> {
    render() {
        const {address, handleEditAddress, handleAddNewAddress} = this.props;
        return (
            <View style={[styles.priceDetailContainer]}>
                <Text style={styles.addressText}>
                    {address.streetAddress}, {address.locality}, {address.city}, {address.pincode}, {address.state}
                </Text>
                <View style={[styles.rowContainer, styles.addressButtonCont]}>
                    <Button
                        onPress={handleEditAddress}
                        title="Edit Address"
                        backgroundColor="#efefef"
                        raised
                        textStyle={styles.colorBlack}
                    />
                    <Button
                        onPress={handleAddNewAddress}
                        title="Add New Address"
                        backgroundColor="#efefef"
                        raised
                        textStyle={styles.colorBlack}
                    />
                </View>
            </View>
        );
    }
}

AddressComponent.defaultProps = defaultProps;

AddressComponent.propTypes = propTypes;

export default AddressComponent;
