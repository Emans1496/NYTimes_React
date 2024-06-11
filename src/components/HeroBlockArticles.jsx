import React, { useEffect, useState } from 'react';
import { fetchTopStories } from '../components/FetchTopStories';
import '../style/HeroAB.css';

const HeroBlockArticles = ({ section }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopStories = async () => {
      try {
        const data = await fetchTopStories(section);
        setArticles(data.slice(0, 3));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTopStories();
  }, [section]);

  if (loading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <div className="hero-block-articles">
      <div className="hero-main-article">
        {articles[0] && (
          <div className="hero-main-article-content">
            <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
              <h1>{articles[0].title}</h1>
            </a>
            <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
              <p>{articles[0].abstract}</p>
            </a>
            <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
              <p>Read more</p>
            </a>
            <div className="article-meta">
              <span>{articles[0].byline}</span>
            </div>
            {articles[0].multimedia && articles[0].multimedia[0] && (
              <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
                <img src={articles[0].multimedia[0].url} alt={articles[0].title} />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="hero-side-articles">
        {articles.slice(1).map(article => (
          <div key={article.url} className="hero-side-article">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
            </a>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <p>{article.abstract}</p>
            </a>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <p>Read more</p>
            </a>
            <div className="article-meta">
              <span>{article.byline}</span>
            </div>
            {article.multimedia && article.multimedia[0] && (
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.multimedia[0].url} alt={article.title} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBlockArticles;
