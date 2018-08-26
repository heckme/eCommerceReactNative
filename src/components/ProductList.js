import React, {Component} from "react";
import {Text, View, ScrollView, TouchableOpacity} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";
import {Card, ListItem, Button, Divider} from "react-native-elements";

import {arrayChunking} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    data: []
}

class ProductList extends Component<{}> {

    handleNavigateToProductDetails = (product) => {
        this.props.handleNavigateToProductDetails(product);
    }

    renderCardView = (product) => (
      <TouchableOpacity onPress={() => this.handleNavigateToProductDetails(product)}>
          <Card
              containerStyle={styles.cardContainer}
              imageStyle={{height: 180}}
              image={require('./../assets/tshirt2.jpg')}>
              <Divider style={{ backgroundColor: '#cccccc' }} />
              <Text style={styles.cardTextTitle}>
                The idea with React
              </Text>
              <Text style={styles.cardTextSubtitle}>
                Rs. 799/-
              </Text>
          </Card>
      </TouchableOpacity>
    )

    renderProductList = () => {
        const {data} = this.props;
        const dataCopy = JSON.parse(JSON.stringify(data));
        if(dataCopy.length % 2 !== 0) {
          dataCopy.push("");
        }
        return arrayChunking(2, dataCopy).map((productList, index) => (
            <Grid key={index}>
                {
                    productList.map((product, i) => (
                        <Col key={i}>
                            {product ? this.renderCardView(product) : <Text></Text>}
                        </Col>
                    ))
                }
            </Grid>
        ));
    }

    render() {
        return (
            <ScrollView style={{padding: 8}}>
                {this.renderProductList()}
            </ScrollView>
        );
    }
}

ProductList.defaultProps = defaultProps;

export default ProductList;
