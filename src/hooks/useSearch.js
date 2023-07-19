import { useEffect, useState } from "react";
import React from 'react'
import yelp from "../API/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMes, setErrMes] = useState("");
    
    const searchAPI = async (userInput) => {
        try {
            const response = await yelp.get("/seach", {
                params: {
                    limit: 40,
                    term: userInput,
                    location: "appleton"
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

    return [searchAPI, results, errMes];
}
