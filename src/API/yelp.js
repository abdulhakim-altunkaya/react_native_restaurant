import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer ZSRYBkslduRyQ8JpilkdOn85xtIaKY46XYN-dZemJiwCStL__mdL5ctEolNZeTqRsZ-1JQSENZ53xOBDWxwXjkVPoO5WNcHI7EoeqfE_rSu8ewLNm8JkT7ldJo-xZHYx",
        
    }
})