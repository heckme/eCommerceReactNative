import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import Swiper from 'react-native-swiper';

import styles from "./../styles/styles";

class ImageSwiper extends Component<{}> {

    renderSlides = (images) => {
        if(images.length > 0) {
            return images.map((image, index) => (
                <View style={styles.swiperSlide} key={index}>
                    <Image source={image} />
                </View>
            ))
        }
    }

    render() {
        const {images} = this.props;
        return (
          <Swiper style={styles.swiperWrapper} showsButtons={true}>
              {this.renderSlides(images)}
          </Swiper>
        );
    }
}

export default ImageSwiper;
