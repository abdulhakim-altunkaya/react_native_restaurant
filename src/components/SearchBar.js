import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({searchTerm, onTermChange, onTermSubmit}) => {
  return(
    <View style={styles.inputContainer}>
        <FontAwesome 
        name="search" 
        style={styles.iconStyle}
        onPress={onTermSubmit}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputArea}
        placeholder="Search" 
        value={searchTerm}
        onChangeText={newTerm => onTermChange(newTerm)} 
        //onEndEditing={onTermSubmit}
        />
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
    marginBottom: 7,
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