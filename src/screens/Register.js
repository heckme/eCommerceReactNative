import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";
import {reduxForm, Field} from "redux-form";

import InputText from "./../components/InputText";
import {navigateBack} from "./../utils";
import {registerUser} from "./../actions";

import styles from "./../styles/styles";

class Register extends Component<{}> {

    onSubmit = values => {
        this.props.registerUser(values);
    }

    renderTextInput = ({placeholder, keyboardType, secureTextEntry, input: { onChange, ...restInput }}) => (
        <InputText
            onChangeText={onChange}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            {...restInput} />
    );

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={[styles.dashboardContainer, styles.justifyCenter]}>
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
                <Button
                    title="Register"
                    backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                    onPress={handleSubmit(this.onSubmit)}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    registerUser: payload => dispatch(registerUser(payload))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "register"})
)(Register);
