import React from 'react';
import './NewsList.css';

const NewsList = ({ articles }) => {
  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <div key={index} className="news-card">
          <img 
            src={article.urlToImage || 'https://via.placeholder.com/150'} 
            alt={article.title} 
            className="news-image"
          />
          <h3 className="news-title">{article.title}</h3>
          <p className="news-description">{article.description}</p>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-more"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
