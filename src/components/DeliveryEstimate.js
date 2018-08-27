import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";

import styles from "./../styles/styles";

class DeliveryEstimate extends Component<{}> {

    render() {
        return (
          <View style={styles.priceDetailContainer}>
              <View style={[styles.rowContainer, styles.padding16]}>
                  <Grid style={{alignItems: "center"}}>
                      <Col size={2}>
                          <Image resizeMode="contain" style={styles.cartImageStyle} source={require('./../assets/product_2.jpg')} />
                      </Col >
                      <Col size={3}>
                          <Text style={styles.deliveryText}>Estimated Delivery</Text>
                      </Col>
                      <Col size={2}>
                          <Text style={styles.dateText}>20 Nov 2018</Text>
                      </Col>
                  </Grid>
              </View>
              <View style={[styles.rowContainer, styles.borderTop, styles.padding16]}>
                  <Grid style={{alignItems: "center"}}>
                      <Col size={2}>
                          <Image resizeMode="contain" style={styles.cartImageStyle} source={require('./../assets/product_3.jpg')} />
                      </Col >
                      <Col size={3}>
                          <Text style={styles.deliveryText}>Estimated Delivery</Text>
                      </Col>
                      <Col size={2}>
                          <Text style={styles.dateText}>20 Nov 2018</Text>
                      </Col>
                  </Grid>
              </View>
          </View>
        );
    }
}

export default DeliveryEstimate;
