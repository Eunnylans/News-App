// components/FilterBar.js
import React, { useState } from 'react';

const FilterBar = ({ setFilters }) => {
  const [category, setCategory] = useState('business');
  const [country, setCountry] = useState('us');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const applyFilters = () => {
    setFilters({ category, country });
  };

  return (
    <div className="filter-bar">
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="health">Health</option>
        </select>
      </label>
      <label>
        Country:
        <select value={country} onChange={handleCountryChange}>
          <option value="us">US</option>
          <option value="gb">UK</option>
          <option value="ca">Canada</option>
        </select>
      </label>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
