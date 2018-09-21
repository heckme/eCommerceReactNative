import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";
import {reduxForm, Field} from "redux-form";
import validator from "validator";

import InputText from "./../components/InputText";
import {navigateBack} from "./../utils";
import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import {loginUser} from "./../actions";

import styles from "./../styles/styles";

class Login extends Component<{}> {

    onSubmit = values => {
        this.props.loginUser(values);
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
        const {handleSubmit} = this.props;
        return (
            <View style={[styles.dashboardContainer]}>
                <Toolbar style={styles.transparentToobar}>
                    <MenuIcon name="arrow-left" size={24} onPress={navigateBack}/>
                </Toolbar>
                <View style={[styles.padding16]}>
                    <Field
                        name="email"
                        placeholder="Email"
                        keyboardType="email-address"
                        component={this.renderTextInput} />
                    <Field
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        component={this.renderTextInput} />
                </View>
                <Button
                    title="Login"
                    backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                    onPress={handleSubmit(this.onSubmit)}/>
            </View>
        );
    }
}

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!validator.isEmail(values.email.trim())) {
        errors.email = "Please enter a valid email"
    }
    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password should be atleast 8 char long"
    }
    return errors
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    loginUser: payload => dispatch(loginUser(payload))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "login", validate})
)(Login);
