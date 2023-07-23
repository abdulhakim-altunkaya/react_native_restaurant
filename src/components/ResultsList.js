import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";
//If we dont use withnavigation, then we need to import
//navigation as a prop from searchscreen. Searchscreen also imports
//it as a prop from react-navigation by default.
const ResultsList = ({title, childResults, navigation}) => {
  if(!childResults.length) {
    return null;
  }

  return (
    <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>{title} ({childResults.length} results)</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={childResults}
            keyExtractor={(element) => element.id} //If I have a property called "key", then no need of keyExtractor
            renderItem={({item}) => ( //this must be called item
              <TouchableOpacity onPress={() => navigation.navigate("Result", {id: item.id})}>
                <ResultDetail restaurant={item} />
              </TouchableOpacity>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
      fontSize: 22,
      fontWeight: "bold",
      marginLeft: 15,
      marginBottom: 5,
    },
    rowContainer: {
      marginBottom: 20,
    },

})

export default withNavigation(ResultsList);