import React, {Component} from "react";
import {Text, View, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";
import {Card, ListItem, Button, Divider, SearchBar} from "react-native-elements";

import {arrayChunking} from "./../utils";

import styles from "./../styles/styles";

const defaultProps = {
    data: []
}

class ProductList extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            imageHeight: ""
        }
    }

    componentDidMount() {
        this.onCardlayout();
    }

    handleNavigateToProductDetails = (product) => {
        this.props.handleNavigateToProductDetails(product);
    }

    onCardlayout = () => {
        var {height, width} = Dimensions.get('window');
        const cardWidth = (parseInt(width) - 28) / 2;
        const height = (cardWidth * 133.33) / 100;
        this.setState({
            imageHeight: parseInt(height)
        })
    }

    renderCardView = (product) => (
      <TouchableOpacity onPress={() => this.handleNavigateToProductDetails(product)}>
          <Card
              containerStyle={styles.cardContainer}
              imageStyle={{height:this.state.imageHeight}}
              imageProps={{resizeMode:"contain"}}
              image={product.thumbnail}>
              <Text style={styles.cardTextTitle}>
                {product.productBrand}
              </Text>
              <Text style={styles.cardTextSubtitle}>
                {product.productPrice}
              </Text>
              <Text style={styles.cardTextDesc}>
                {product.productDesc}
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
            <ScrollView style={{paddingLeft:4, paddingRight: 4}}>
                {this.renderProductList()}
            </ScrollView>
        );
    }
}

ProductList.defaultProps = defaultProps;

export default ProductList;
