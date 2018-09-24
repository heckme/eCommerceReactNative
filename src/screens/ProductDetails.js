import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView, Animated, Easing, ToastAndroid} from "react-native";
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
            isFlipped: false,
            flipValue: new Animated.Value(0),
            selectedSize: ""
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

    componentWillReceiveProps(nextProps) {
        const {product} = this.props;
        const isProduct = _.some(nextProps.productsInCart, product);
        if(!isProduct) {
            this._flipButton(0);
            this.setState({
                isProductAddedToCart: false
            });
        }
    }

    getProductSize = (size) => {
        this.setState({
            size
        });
    }

    saveProductToCart = () => {
        const {product} = this.props;
        if (!this.state.isProductAddedToCart) {
            if(product && product.sizeAvailable && product.sizeAvailable.length > 0 && !this.state.size) {
                ToastAndroid.showWithGravityAndOffset(
                    "Please select a size",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    0,
                    150);
                return false;
            }
            const productCopy = JSON.parse(JSON.stringify(product));
            productCopy.selectedSize = this.state.size;
            this.props.saveToCart(productCopy);
            this._flipButton();
            this.setState({
                isProductAddedToCart: true,
                isFlipped: true
            });
        } else {
            navigateTo("cartDetails");
        }
    }

    _flipButton = (toValue = 1) => {
        Animated.timing(
            this.state.flipValue,
            {
              toValue: toValue,
              duration: 275,
              easing: Easing.linear
            }
        ).start();
    }

    render() {
        const {product} = this.props;
        const {isFlipped, isProductAddedToCart} = this.state;
        const spin = this.state.flipValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        });
        return (
          <View style={styles.productContainer}>
              <Toolbar>
                  <MenuIcon
                      name="arrow-left"
                      size={24}
                      color="#000000"
                      onPress={navigateBack}/>
                  <View style={styles.toolbarUtils}>
                      <Text style={styles.appTitle}>Product Details</Text>
                  </View>
              </Toolbar>
              <ScrollView>
                  <ImageSwiper images={product.coverImages}/>
                  <ProductTitlePrice
                      price={product.price}
                      discount={product.discount}
                      desc={product.productDesc}
                      name={product.productName}
                      brand={product.brand} />
                  {product.sizeAvailable.length > 0 &&
                      <ProductSize
                          sizeAvailable={product.sizeAvailable}
                          handleProductSize={this.getProductSize}
                          size={this.state.size}/>
                  }
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
                                  style={[{backgroundColor: "#11cda7"}, {transform: [{rotateX: (isFlipped && isProductAddedToCart) ?"180deg" : "0deg"}]}]}
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
