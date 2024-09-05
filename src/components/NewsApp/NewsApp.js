import React, { useState, useEffect } from 'react';
import { fetchNews } from './services/newsApi';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const loadNews = async () => {
      const newsArticles = await fetchNews(category);
      setArticles(newsArticles);
    };
    loadNews();
  }, [category]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Today's News</h1>
        <nav>
          {['general', 'technology', 'sports', 'business'].map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)}>
              {cat.toUpperCase()}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewsApp;
