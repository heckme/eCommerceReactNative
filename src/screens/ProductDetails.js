import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView, Animated, Easing} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";
import _ from "lodash";

import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import ImageSwiper from "./../components/Swiper";
import ProductTitlePrice from "./../components/ProductTitlePrice";
import ProductSize from "./../components/ProductSize";
import ProductSummary from "./../components/ProductSummary";
import FlexButton from "./../components/FlexButton";
import StickyFooter from "./../components/StickyFooter";
import {navigateBack, navigateTo} from "./../utils";
import {saveToCart} from "./../actions";

import styles from "./../styles/styles";

defaultProps = {
    product: {}
}

class ProductDetails extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            isProductAddedToCart: false,
            flipValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        const {productsInCart, product} = this.props;
        const isProduct = _.some(productsInCart, product);
        if(isProduct) {
            this.setState({
                isProductAddedToCart: true
            });
        }
    }

    getProductSize = (size) => {
        this.setState({
            size
        });
    }

    saveProductToCart = () => {
        if (!this.state.isProductAddedToCart) {
            this._flipButton();
            const {product} = this.props;
            this.props.saveToCart(product);
            this.setState({
                isProductAddedToCart: true
            });
        } else {
            navigateTo("cartDetails");
        }
    }

    _flipButton = () => {
        Animated.timing(
            this.state.flipValue,
            {
              toValue: 1,
              duration: 275,
              easing: Easing.linear
            }
        ).start();
    }

    render() {
        const {product} = this.props;
        const spin = this.state.flipValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });
        return (
          <View style={styles.productContainer}>
              <Toolbar>
                  <MenuIcon
                      name="arrow-left"
                      size={32}
                      color="#000000"
                      onPress={navigateBack}/>
              </Toolbar>
              <ScrollView>
                  <ImageSwiper images={product.coverImages}/>
                  <ProductTitlePrice price={product.productPrice} desc={product.productDesc} title={product.productBrand} />
                  <ProductSize sizeAvailable={product.sizeAvailable} handleProductSize={this.getProductSize} size={this.state.size}/>
                  <ProductSummary summary={product.productSummary}/>
                  <View style={styles.bottomGapInScrollView} />
              </ScrollView>
              <StickyFooter>
                  <Animated.View
                      style={[styles.stickyFooterContainer, {transform: [{rotateX: spin}]}]}>
                      <Grid>
                          <Col>
                              <FlexButton
                                  name={this.state.isProductAddedToCart ? "Go to Bag" : "Add to Bag"}
                                  style={[{backgroundColor: "#11cda7"}, {transform: [{rotateX: this.state.isProductAddedToCart ?"180deg" : "0deg"}]}]}
                                  iconName="shopping-bag"
                                  iconSize={18}
                                  iconColor="#ffffff"
                                  iconType="foundation"
                                  onPress={this.saveProductToCart} />
                          </Col>
                      </Grid>
                  </Animated.View>
              </StickyFooter>
          </View>
        );
    }
}

ProductDetails.defaultProps = defaultProps;

const mapStateToProps = state => ({
    productsInCart: state.cart.productsInCart
});

const mapDispatchToProps = dispatch => ({
    saveToCart: product => dispatch(saveToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
