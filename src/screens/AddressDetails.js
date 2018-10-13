import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import {Button} from "react-native-elements";
import {reduxForm, Field} from "redux-form";
import validator from "validator";

import Toolbar from "../components/Toolbar";
import InputText from "../components/InputText";
import {navigateTo} from "../utils";
import {setAddress} from "../actions";

import styles from "../styles/styles";

class AddressDetails extends Component<{}> {

    onSubmit = (values) => {
        this.props.setAddress(values);
        navigateTo("confirmOrder");
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.addressContainer}>
                <Toolbar>
                    <View style={[styles.toolbarUtils, styles.justifyCenter]}>
                        <Text style={styles.appTitle}>Address</Text>
                    </View>
                </Toolbar>
                <ScrollView>
                    <View style={styles.itemHeadingContainer}>
                        <Text style={styles.boldText}>Add New Address</Text>
                    </View>
                    <View style={[styles.priceDetailContainer, styles.padding16]}>
                        <Field
                            name="pincode"
                            maxLength={6}
                            placeholder="Pin Code"
                            keyboardType="number-pad"
                            component={this.renderTextInput} />
                        <Field
                            name="locality"
                            placeholder="Locality"
                            component={this.renderTextInput} />
                        <Field
                            name="city"
                            placeholder="City"
                            component={this.renderTextInput} />
                        <Field
                            name="state"
                            placeholder="State"
                            component={this.renderTextInput} />
                    </View>
                    <View style={[styles.priceDetailContainer, styles.padding16]}>
                        <Field
                            name="name"
                            placeholder="Name"
                            component={this.renderTextInput} />
                        <Field
                            name="streetAddress"
                            placeholder="Address"
                            component={this.renderTextInput} />
                    </View>
                    <Button
                        title="Save"
                        backgroundColor="#7468c5"
                        buttonStyle={styles.marginBottom16}
                        onPress={handleSubmit(this.onSubmit)} />
                </ScrollView>
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.pincode) {
        errors.pincode = "Pincode is required";
    } else if (!validator.isNumeric(values.pincode.trim())) {
        errors.pincode = "Please enter valid pincode";
    }
    if (!values.locality) {
        errors.locality = "Locality is required";
    } else if (!validator.isAlpha(values.locality.trim())) {
        errors.locality = "Please enter valid locality";
    }
    if (!values.city) {
        errors.city = "City is required";
    } else if (!validator.isAlpha(values.city.trim())) {
        errors.city = "Please enter valid city";
    }
    if (!values.state) {
        errors.state = "State is required";
    } else if (!validator.isAlpha(values.state.trim())) {
        errors.state = "Please enter valid state";
    }
    if (!values.name) {
        errors.name = "Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(values.name.trim())) {
        errors.name = "Please enter valid name";
    }
    if (!values.streetAddress) {
        errors.streetAddress = "Address is required";
    }
    return errors;
};

const mapStateToProps = (state, ownProps) => ({
    initialValues: ownProps.isEditAddress ? state.deliveryAddress.address : {}
});

const mapDispatchToProps = dispatch => ({
    setAddress: payload => dispatch(setAddress(payload))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "address", validate})
)(AddressDetails);
