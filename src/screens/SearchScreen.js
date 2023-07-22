import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import yelp from "../API/yelp";

const SearchScreen = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [results, setResults] = useState([]);
  const [errMes, setErrMes] = useState("");

  const searchAPI = async (userInput) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 30,
          term: userInput,
          location: "toronto",
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrMes(error.message);
    }
  }
  useEffect(() => {
    searchAPI("hamburger");
  }, [])
  
  const filterResults = (price) => {
    //price === "$" "$$" "$$$"
    const filteredResults = results.filter(result => result.price === price);
    return filteredResults;
  }

  return(
    <View style={styles.mainContainer}>
        <SearchBar 
          searchTerm={searchWord} 
          onTermChange={ (newTerm) => setSearchWord(newTerm) } 
          onTermSubmit={() => searchAPI(searchWord)}
        />
        <ScrollView>
          <View>
            
            <ResultsList childResults={filterResults("$")} 
              childNav={props.navigation} title="Cost Effective" />
            <ResultsList childResults={filterResults("$$")} 
              childNav={props.navigation} title="Bit Pricier" />
            <ResultsList childResults={filterResults("$$$")} 
              childNav={props.navigation} title="Big Spender" />
            {errMes.length > 1 ? <Text>{errMes}</Text> : null}

          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

})

export default SearchScreen;