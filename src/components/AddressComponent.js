import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements"

import styles from "./../styles/styles";

class AddressComponent extends Component<{}> {

    render() {
        return (
            <View style={[styles.priceDetailContainer]}>
                <Text style={styles.addressText}>445 Mount Eden Road, Mount Eden, Auckland, 21 Greens Road RD 2 Ruawai 0592, Main Highway Otaki; 32 Wilson Street, PO Box 39100, Howick</Text>
                <View style={[styles.rowContainer, {justifyContent: "space-between", paddingTop: 16, paddingBottom: 16}]}>
                    <Button
                        onPress={() => {}}
                        title="Edit Address"
                        backgroundColor="#efefef"
                        raised
                        textStyle={{color: "#000000"}}
                        />

                    <Button
                        onPress={() => {}}
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

export default AddressComponent;
