import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../API/yelp";

function ResultShow({navigation}) {
  const [result, setResult] = useState(null);
  //we are saying id in getparam because in resultlist, it corresponds to the first id
  const idRestaurant = navigation.getParam("id");
  
  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(idRestaurant);
  }, []);
  
  return (
    <View>
        { result !== null ? 
          <>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={result.photos}
              keyExtractor={(element) =>element}
              renderItem={({item}) => (
                <Image 
                  style={styles.imgStyle}
                  source={{uri: item}}
                />
              )}  
            />
            <Text> {result.phone}</Text>
            <Text> {result.name} </Text> 
          </>
        : 
          <Text>"dude"</Text>
        }
    </View>
  )
}
const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  titleStyle: {
      fontSize: 15,
      fontStyle: "italic"
  },
  imgStyle: {
    width: 250,
    height:120,
    borderRadius: 4,
    marginBottom: 5,
  },
})
export default ResultShow