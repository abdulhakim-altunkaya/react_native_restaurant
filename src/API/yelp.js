import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer igQChSWrWpDCtgYH2uCFdkrYNbSy2Gk8jLLyrxJMRHMFrJ6ZIYlUU143l1YG88SYNR8VvcnS965j6Llfwwy3HqovwGi6qRzeTHSwHDMEcUfWQdMIoNf1onraS6K3ZHYx", 
    }
})