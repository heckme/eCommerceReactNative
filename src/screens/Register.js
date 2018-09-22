import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {Text, View, ScrollView, ActivityIndicator} from "react-native";
import {Button} from "react-native-elements";
import {reduxForm, Field} from "redux-form";
import validator from "validator";

import InputText from "./../components/InputText";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {navigateBack} from "./../utils";
import {registerUser} from "./../actions";
import ButtonWrap from "./../components/ButtonWrap";

import styles from "./../styles/styles";

class Register extends Component<{}> {

    onSubmit = values => {
        this.props.registerUser(values);
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, placeholder, keyboardType, secureTextEntry, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    render() {
        const {handleSubmit, loader} = this.props;
        return (
            <View style={[styles.dashboardContainer]}>
                <Toolbar style={styles.transparentToobar}>
                    <MenuIcon name="arrow-left" size={24} onPress={navigateBack}/>
                </Toolbar>
                <ScrollView style={[styles.dashboardContainer]}>
                    <View style={[styles.padding16]}>
                        <Field
                            name="name"
                            placeholder="Name"
                            component={this.renderTextInput} />
                        <Field
                            name="email"
                            placeholder="Email"
                            keyboardType="email-address"
                            component={this.renderTextInput} />
                        <Field
                            name="phone"
                            placeholder="Phone"
                            keyboardType="number-pad"
                            component={this.renderTextInput} />
                        <Field
                            name="password"
                            placeholder="Password"
                            secureTextEntry={true}
                            component={this.renderTextInput} />
                    </View>
                    <ButtonWrap
                        onPress={handleSubmit(this.onSubmit)}
                        disabled={loader}
                        style={styles.authButton}>
                        {loader ?
                          <ActivityIndicator color="#ffffff"/>
                          :
                          <Text style={styles.authButtonText}>Register</Text>
                        }
                    </ButtonWrap>
                </ScrollView>
            </View>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Name is required"
    } else if (!/^[a-zA-Z ]+$/.test(values.name.trim())) {
        errors.name = "Please enter a valid name"
    }
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!validator.isEmail(values.email.trim())) {
        errors.email = "Please enter a valid email"
    }
    if (!values.phone) {
        errors.phone = "Phone is required"
    } else if (!validator.isNumeric(values.phone.trim())) {
        errors.phone = "Please enter a valid phone"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password should be atleast 8 char long"
    }
    return errors
}

const mapStateToProps = state => ({
    loader: state.utils.loader
});

const mapDispatchToProps = dispatch => ({
    registerUser: payload => dispatch(registerUser(payload))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "register", validate})
)(Register);
