import React from 'react';
import './Header.css';

const Header = ({ setCategory }) => {
  const categories = ['general', 'technology', 'sports', 'business', 'entertainment', 'health'];

  return (
    <header className="app-header">
      <div className="logo">
        <h1>Today's News</h1>
      </div>
      <nav className="nav-categories">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => setCategory(category)} 
            className="category-button"
          >
            {category.toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
