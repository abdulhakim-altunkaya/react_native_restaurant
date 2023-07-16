import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return(
    <View style={styles.inputContainer}>
        <FontAwesome name="search"size={30}/>
        <Text>Search Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#d3d3d3",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
})

export default SearchBar;