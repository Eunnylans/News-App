import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList/NewsList';
import FilterBar from './components/FilterBar/FilterBar';
import NewsAPI from './services/NewsApi/NewsApi';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({ category: 'business', country: 'us' });

  useEffect(() => {
    // Fetch news when filters change
    NewsAPI.getTopHeadlines(filters)
      .then(response => setArticles(response.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, [filters]);

  return (
    <div className="App">
      <h1>News App</h1>
      <FilterBar setFilters={setFilters} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;



