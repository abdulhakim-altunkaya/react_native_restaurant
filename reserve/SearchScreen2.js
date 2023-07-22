import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../src/components/SearchBar";
import yelp from "../src/API/yelp";
import useSearch from "../src/hooks/useSearch";

const SearchScreen = () => {
  const [searchWord, setSearchWord] = useState("");  
  const [searchAPI, results, errMes] = useSearch();

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