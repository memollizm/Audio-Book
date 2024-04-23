import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants';

const Carousel = () => {
    const slides = [
        "https://halikoy.com/wp-content/uploads/2016/06/kirman-memluk-hali-modelleri.jpg",
        "https://www.festivalhali.com/Data/EditorFiles/fe-files/Maxilux-A809AP-Y03_43-Bej_Oda.jpg",
        "https://halikoy.com/wp-content/uploads/2016/06/kirman-binbirgece-hali-modelleri.jpg",
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
        dotColor= {COLORS.primary}
        inactiveDotColor = {COLORS.secondary}
        ImageComponentStyle = {{borderRadius: 15, with: "93%", marginTop: 15}}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center"

    }
})