import React, {Component} from "react";
import {Text, View, Image} from "react-native";
import Swiper from 'react-native-swiper';

import {BASE_URL} from "./../config/settings";

import styles from "./../styles/styles";

class ImageSwiper extends Component<{}> {

    renderSlides = (images) => {
        if(images.length > 0) {
            return images.map((image, index) => {
                const imageUrl = image.split("/");
                const coverImage = `${BASE_URL}/${imageUrl[1]}/${imageUrl[2]}`;
                return (
                    <View style={styles.swiperSlide} key={index}>
                        <Image source={{uri: coverImage}} style={{width:"100%", flex: 1}}/>
                    </View>
                );
            });
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
