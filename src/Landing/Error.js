import React, { useEffect, useState } from 'react';

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=feef00c59ada4fbd9546a7c97ad0fe81'
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 10)); // Get the first 10 articles
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Top 10 News Articles</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt="Article" />
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
