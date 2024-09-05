import axios from "axios";

const API_KEY = "Y70a269ec56d849f8a91b4524b379db6c";
const BASE_URL = "https://newsapi.org/v2";

const fetchNews = async (category = "general") => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: "us",
        category: category,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news", error);
  }
};
export default fetchNews;