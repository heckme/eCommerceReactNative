import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import { Button } from 'react-native-elements';

import Toolbar from "./../components/Toolbar";
import InputText from "./../components/InputText";

import styles from "./../styles/styles";

class AddressDetails extends Component<{}> {

    constructor(props){
        super(props);
        this.state = {
            pincode: "",
            locality: "",
            city: "",
            state: "",
            name: "",
            address: "",
            mobile: ""
        }
    }

    onChangePin = (pincode) => {
        this.setState({
            pincode
        })
    }

    onChangeLocality = (locality) => {
        this.setState({
            locality
        })
    }

    onChangeCity = (city) => {
        this.setState({
            city
        })
    }

    onChangeState = (state) => {
        this.setState({
            state
        })
    }

    onChangeName = (name) => {
        this.setState({
            name
        })
    }

    onChangeAddress = (address) => {
        this.setState({
            address
        })
    }

    onChangeMobile = (mobile) => {
        this.setState({
            mobile
        })
    }

    render() {
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
                      <InputText placeholder="Pin Code" value={this.state.pincode} onChangeText={this.onChangePin} />
                      <InputText placeholder="Locality" value={this.state.locality} onChangeText={this.onChangeLocality} />
                      <InputText placeholder="City" value={this.state.city} onChangeText={this.onChangeCity} />
                      <InputText placeholder="State" value={this.state.state} onChangeText={this.onChangeState} />
                  </View>
                  <View style={[styles.priceDetailContainer, styles.padding16]}>
                      <InputText placeholder="Name" value={this.state.name}  onChangeText={this.onChangeName} />
                      <InputText placeholder="Address" value={this.state.address}  onChangeText={this.onChangeAddress} />
                      <InputText placeholder="Mobile" value={this.state.mobile}  onChangeText={this.onChangeMobile} />
                  </View>
                  <Button
                      title="Save"
                      backgroundColor="#7468c5" buttonStyle={styles.marginBottom16}
                      onPress={() => navigateTo("addressDetails")}/>
              </ScrollView>
          </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetails);
