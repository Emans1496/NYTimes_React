import React, { useState, useEffect } from 'react';
import fetchTopStories from '../utils/FetchTopStories';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../style/HeroAB.css';

const HeroBlockArticles = ({ section }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopStories(section);
      setArticles(data.slice(0, 3)); 
      setLoading(false);
    };

    fetchData();
  }, [section]);

  if (loading) {
    return <Skeleton height={400} />;
  }

  if (articles.length === 0) {
    return <div>No articles found</div>;
  }

  return (
    <div className="hero-block-articles">
      <div className="hero-main-article">
        <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
          <img src={articles[0].multimedia?.[0]?.url} alt={articles[0].title} className="hero-main-image" />
        </a>
        <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
          <h1>{articles[0].title}</h1>
        </a>
        <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
          <p>{articles[0].abstract}</p>
        </a>
        <span className="article-meta">{articles[0].byline} &bull; {new Date(articles[0].published_date).toLocaleDateString()}</span>
      </div>
      <div className="hero-side-articles">
        {articles.slice(1, 3).map((article, index) => (
          <div key={index} className="hero-side-article">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.multimedia?.[0]?.url} alt={article.title} className="hero-side-image" />
            </a>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
            </a>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <p>{article.abstract}</p>
            </a>
            <span className="article-meta">{article.byline} &bull; {new Date(article.published_date).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBlockArticles;
