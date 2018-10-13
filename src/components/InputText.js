import PropTypes from "prop-types";
import React, {Component} from "react";
import {TextInput} from "react-native";

import styles from "../styles/styles";

const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool
};

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false
};

class InputText extends Component<{}> {

    mapElement = (node) => {
        const {mapElement} = this.props;
        mapElement(node);
    }

    render() {
        const {placeholder, secureTextEntry, keyboardType, maxLength, value, onChangeText, onSubmitEditing} = this.props;
        return (
            <TextInput
                style={styles.inputComponentStyles}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholder={placeholder}
                placeholderTextColor="rgba(0,0,0,0.8)"
                selectionColor="#999999"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
                returnKeyType="next"
                value={value}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText} />
        );
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;
