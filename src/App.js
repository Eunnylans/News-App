import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import NewsList from './components/NewsList/NewsList';
import FilterBar from './components/FilterBar/FilterBar';
import NewsAPI from './services/NewsApi/NewsApi';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({ category: 'business', country: 'us' });
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    setLoading(true);  // Start loading when filters change
    NewsAPI.getTopHeadlines(filters)
      .then(response => {
        setArticles(response.articles);
        setLoading(false);  // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, [filters]);

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Today's Top Headlines
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary">
          Stay updated with the latest news from around the world.
        </Typography>
      </Box>

      {/* Filter Bar */}
      <Box sx={{ mb: 4 }}>
        <FilterBar setFilters={setFilters} />
      </Box>

      {/* News List or Loading Spinner */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <NewsList articles={articles} />
      )}
    </Container>
  );
};

export default App;




