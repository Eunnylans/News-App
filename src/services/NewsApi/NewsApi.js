import axios from 'axios';

const apiKey = '70a269ec56d849f8a91b4524b379db6c';

const NewsAPI = {
  getTopHeadlines: (filters) => {
    const { category, country } = filters;
    return axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        apiKey: apiKey,
        category: category,
        country: country,
        language: 'en',
      },
    }).then(response => response.data);
  },

  getEverything: (query) => {
    return axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey: apiKey,
        q: query,
        language: 'en',
      },
    }).then(response => response.data);
  },

  getSources: () => {
    return axios.get('https://newsapi.org/v2/sources', {
      params: {
        apiKey: apiKey,
        language: 'en',
        country: 'us',
      },
    }).then(response => response.data);
  }
};

export default NewsAPI;
