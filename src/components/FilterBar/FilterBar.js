import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';

const FilterBar = ({ setFilters }) => {
  const [category, setCategory] = useState('business');
  const [country, setCountry] = useState('us');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const applyFilters = () => {
    setFilters({ category, country });
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 2, 
        padding: 2, 
        backgroundColor: '#f5f5f5', 
        borderRadius: '8px' 
      }}
    >
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleCategoryChange} label="Category">
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="technology">Technology</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Country</InputLabel>
        <Select value={country} onChange={handleCountryChange} label="Country">
          <MenuItem value="us">US</MenuItem>
          <MenuItem value="gb">UK</MenuItem>
          <MenuItem value="ca">Canada</MenuItem>
        </Select>
      </FormControl>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={applyFilters} 
        sx={{ height: '56px' }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterBar;
