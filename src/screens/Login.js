import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {Text, View} from "react-native";
import {Button} from "react-native-elements";
import {reduxForm, Field} from "redux-form";

import InputText from "./../components/InputText";
import {navigateBack} from "./../utils";
import {loginUser} from "./../actions";

import styles from "./../styles/styles";

class Login extends Component<{}> {

    onSubmit = values => {
        this.props.loginUser(values);
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    loginUser: payload => dispatch(loginUser(payload))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "login"})
)(Login);
