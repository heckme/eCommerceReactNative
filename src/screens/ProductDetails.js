import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, ScrollView} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";

import Toolbar from "./../components/Toolbar";
import MenuIcon from "./../components/MenuIcon";
import ImageSwiper from "./../components/Swiper";
import ProductTitlePrice from "./../components/ProductTitlePrice";
import ProductSize from "./../components/ProductSize";
import ProductInfo from "./../components/ProductInfo";
import FlexButton from "./../components/FlexButton";
import StickyFooter from "./../components/StickyFooter";
import {navigateBack, navigateTo} from "./../utils";

import styles from "./../styles/styles";

class ProductDetails extends Component<{}> {
    constructor(props) {
        super(props);
        this.state={
            size: ""
        }
    }

    getProductSize = (size) => {
        this.setState({
            size
        });
    }

    render() {
        return (
          <View style={styles.productContainer}>
              <Toolbar>
                  <MenuIcon
                      name="arrow-left"
                      size={32}
                      handleClickIcon={navigateBack}/>
                  <View style={styles.toolbarUtils}>
                      <Text style={styles.appTitle}>Product Details</Text>
                  </View>
              </Toolbar>
              <ScrollView>
                  <ImageSwiper />
                  <ProductTitlePrice />
                  <ProductSize handleProductSize={this.getProductSize} size={this.state.size}/>
                  <ProductInfo />
                  <View style={styles.bottomGapInScrollView} />
              </ScrollView>
              <StickyFooter>
                  <Grid>
                      <Col>
                          <FlexButton
                              name="Save"
                              style={{backgroundColor: "#535766"}}
                              iconName="list-bullet"
                              iconSize={18}
                              iconColor="#ffffff"
                              iconType="foundation" />
                      </Col>
                      <Col>
                          <FlexButton
                              name="Go to bag"
                              style={{backgroundColor: "#11cda7"}}
                              iconName="shopping-bag"
                              iconSize={18}
                              iconColor="#ffffff"
                              iconType="foundation"
                              onPress={() => navigateTo("cartDetails")} />
                      </Col>
                  </Grid>
              </StickyFooter>
          </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
