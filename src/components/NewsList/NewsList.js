// components/NewsList.js
import React from 'react';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.length > 0 ? (
        articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
};

export default NewsList;
