import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import {Col, Grid} from "react-native-easy-grid";
import {Card} from "react-native-elements";
import _ from "lodash";

import {arrayChunking, renderCurrency, calculateDiscount} from "../utils";
import {BASE_URL} from "../config/settings";

import styles from "../styles/styles";

const propTypes = {
    data: PropTypes.array,
    handleNavigateToProductDetails: PropTypes.func
};

const defaultProps = {
    data: [],
    handleNavigateToProductDetails: () => {}
};

class ProductList extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            imageHeight: "auto"
        };
    }

    componentDidMount() {
        this.onCardlayout();
    }

    handleNavigateToProductDetails = (product) => {
        const {handleNavigateToProductDetails} = this.props;
        handleNavigateToProductDetails(product);
    }

    onCardlayout = () => {
        const {width} = Dimensions.get("window");
        const cardWidth = parseInt(width) / 2;
        const calcHeight = (cardWidth * 133.33) / 100;
        this.setState({
            imageHeight: parseInt(calcHeight)
        });
    }

    renderCardView = (product) => {
        const {imageHeight} = this.state;

        let discount;
        if (product.discount && parseFloat(product.discount) > 0) {
            discount = calculateDiscount(parseFloat(product.price), parseFloat(product.discount));
        }
        const thumbnail = product.thumbnail.split("/");
        const thumbnailUrl = `${BASE_URL}/${thumbnail[1]}/${thumbnail[2]}`;

        return (
            <TouchableOpacity onPress={() => this.handleNavigateToProductDetails(product)}>
                <Card
                    containerStyle={styles.cardContainer}
                    imageStyle={{height: imageHeight}}
                    imageProps={{resizeMode: "contain"}}
                    image={{uri: thumbnailUrl}}>
                    <Text style={styles.cardTextTitle}>
                        {product.brand}
                    </Text>
                    <View style={[styles.flexRow, styles.alignCenter]}>
                        <Text style={styles.cardTextSubtitle}>
                            {renderCurrency()} {discount ? Math.round(parseFloat(product.price) - discount) : parseFloat(product.price)}
                        </Text>
                        {discount
                            && (
                                <View style={styles.flexRow}>
                                    <Text style={[styles.cardTextOriginalPrice, styles.lineThrough]}>
                                        {renderCurrency()} {product.price}
                                    </Text>
                                    <Text style={[styles.cardTextOriginalPrice, styles.redColorText]}>
                                        {product.discount}% OFF
                                    </Text>
                                </View>
                            )
                        }
                    </View>
                    <Text style={styles.cardTextDesc} ellipsizeMode="tail" numberOfLines={1}>
                        {product.productDesc}
                    </Text>
                </Card>
            </TouchableOpacity>
        );
    }

    renderProductList = () => {
        const {data} = this.props;
        const activeProducts = _.filter(data, ["status", true]);
        if (activeProducts.length % 2 !== 0) {
            activeProducts.push("");
        }
        return arrayChunking(2, activeProducts).map((productList, index) => (
            <Grid key={index}>
                {
                    productList.map((product, i) => (
                        <Col key={i}>
                            {product ? this.renderCardView(product) : <Text />}
                        </Col>
                    ))
                }
            </Grid>
        ));
    }

    render() {
        return (
            <ScrollView>
                {this.renderProductList()}
            </ScrollView>
        );
    }
}

ProductList.defaultProps = defaultProps;

ProductList.propTypes = propTypes;

export default ProductList;
