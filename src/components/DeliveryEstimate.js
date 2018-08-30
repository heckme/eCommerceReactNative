import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";
import moment from "moment";

import styles from "./../styles/styles";

class DeliveryEstimate extends Component<{}> {

    renderEstimateItems = (productsInCart) => {
        return productsInCart.map((product, index) => {
            return (
                <View key={index} style={[styles.rowContainer, styles.padding16, (index !== 0) ? styles.borderTop : ""]}>
                    <Grid style={{alignItems: "center"}}>
                        <Col size={2}>
                            <Image resizeMode="contain" style={styles.cartImageStyle} source={product.thumbnail} />
                        </Col >
                        <Col size={3}>
                            <Text style={styles.deliveryText}>Estimated Delivery</Text>
                        </Col>
                        <Col size={2}>
                            <Text style={styles.dateText}>{moment().add(5, "days").format("DD-MM-YYYY")}</Text>
                        </Col>
                    </Grid>
                </View>
            )
        });
    }

    render() {
        const {productsInCart} = this.props;
        return (
          <View style={styles.priceDetailContainer}>
              {this.renderEstimateItems(productsInCart)}
          </View>
        );
    }
}

export default DeliveryEstimate;
