import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, childResults, childNav}) => {
  return (
    <View style={styles.rowContainer}>
        <Text style={styles.titleStyle}>{title} ({childResults.length} results)</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={childResults}
            keyExtractor={(element) => element.id} //If I have a property called "key", then no need of keyExtractor
            renderItem={({item}) => ( //this must be called item
              <TouchableOpacity onPress={() => childNav.navigate("Result")}>
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

export default ResultsList