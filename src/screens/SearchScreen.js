import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../API/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 30,
        term: term,
        location: "san jose",
      }
    });
    setResults(response.data.businesses);
  }

  return(
    <View>
        <SearchBar 
          searchTerm={term} 
          onTermChange={ (newTerm) => setTerm(newTerm) } 
          onTermSubmit={searchAPI}
        />
        <Text>{results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen;