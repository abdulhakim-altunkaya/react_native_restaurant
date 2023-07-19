import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../API/yelp";

const SearchScreen = () => {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState([]);
  const [errMes, setErrMes] = useState("");

  const searchAPI = async (userInput) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 30,
          term: userInput,
          location: "san jose",
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrMes(error.message);
    }
  }
  useEffect(() => {
    searchAPI("sushi");
  }, [])
  

  return(
    <View>
        <SearchBar 
          searchTerm={searchWord} 
          onTermChange={ (newTerm) => setSearchWord(newTerm) } 
          onTermSubmit={() => searchAPI(searchWord)}
        />
        <Text>{results.length}</Text>
        {errMes.length > 1 ? <Text>{errMes}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen;