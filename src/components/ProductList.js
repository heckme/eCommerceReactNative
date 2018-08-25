import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";
import {Card, ListItem, Button, Divider} from "react-native-elements";

import {arrayChunking} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    productList: [1, 2, 3, 4, 5, 6, 7]
}

class ProductList extends Component<{}> {

    renderCardView = () => (
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
    )

    renderProductList = () => {
        const {productList} = this.props;
        return arrayChunking(2, productList).map((product, index) => (
            <Grid key={index}>
                {
                    product.map((p, i) => (
                        <Col key={i}>
                            {this.renderCardView()}
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
