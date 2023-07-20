import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ResultsList = ({title, childResults}) => {
  return (
    <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text>{childResults.length}</Text>
        <FlatList
            horizontal
            data={childResults}
            keyExtractor={(element) => element.id} //If I have a property called "key", then no need of keyExtractor
            renderItem={({item}) => ( //this must be called item
            <Text style={styles.resultStyle}> {item.name} </Text>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    resultStyle: {
      fontSize: 15,
      fontStyle: "italic",
    }
})

export default ResultsList