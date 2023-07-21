import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";

function ResultDetail({restaurant}) {
  return (
    <View>
        <Image source={{uri: restaurant.image_url}} style={styles.imgStyle}/>
        <Text style={styles.titleStyle}>{restaurant.name}  </Text>
        <Text> {restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15,
        fontStyle: "italic"
    },
    imgStyle: {
      width: 250,
      height:120,
      borderRadius: 4,
    },
})

export default ResultDetail