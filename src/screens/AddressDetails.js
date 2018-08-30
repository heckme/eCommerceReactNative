import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {Text, View, ScrollView, TextInput} from "react-native";
import {Button} from "react-native-elements";
import {reduxForm, Field} from "redux-form";

import Toolbar from "./../components/Toolbar";
import InputText from "./../components/InputText";
import {navigateTo} from "./../utils";

import styles from "./../styles/styles";

class AddressDetails extends Component<{}> {

    onSubmit = values => {
        navigateTo("confirmOrder");
    }

    submitForm = () => {
        const {handleSubmit} = this.props;
        handleSubmit(this.onSubmit);
    }

    renderTextInput = ({placeholder, input: { onChange, ...restInput }}) => (
        <InputText
            onChangeText={onChange}
            placeholder={placeholder}
            {...restInput} />
    );


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
                          placeholder="Pin Code"
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
                      <Field
                          name="mobile"
                          placeholder="Mobile"
                          component={this.renderTextInput} />
                  </View>
                  <Button
                      title="Save"
                      backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                      onPress={handleSubmit(this.onSubmit)}/>
              </ScrollView>
          </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "address"})
)
(AddressDetails);
