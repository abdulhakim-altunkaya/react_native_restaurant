import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return(
    <View style={styles.inputContainer}>
        <FontAwesome name="search" style={styles.iconStyle}/>
        <TextInput style={styles.inputArea}
        placeholder="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    backgroundColor: "#d3d3d3",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputArea: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 11,
  },
})

export default SearchBar;