import {connect} from "react-redux";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "./../styles/styles";

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    value: "",
    placeholder: ""
}

class InputText extends Component<{}> {

    mapElement = (node) => {
        this.props.mapElement(node);
    }

    render() {
        return (
            <TextInput style={styles.inputComponentStyles}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder={this.props.placeholder}
                placeholderTextColor="rgba(0,0,0,0.8)"
                selectionColor= "#fff"
                autoCapitalize= "words"
                keyboardType= "default"
                returnKeyType= "next"
                value= {this.props.value ? this.props.value : ""}
                onChangeText= {this.props.onChangeText}/>
        );
    }
}

export default InputText;

InputText.defaultProps = defaultProps;
