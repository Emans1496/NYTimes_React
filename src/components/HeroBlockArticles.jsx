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
          <>
            <div className="hero-main-article-content">
              <h1>{articles[0].title}</h1>
              <p>{articles[0].abstract}</p>
              <a href={articles[0].url} target ='_blank'>Read more</a>
              <div className="article-meta">
                <span>{articles[0].byline}</span>
              </div>
            </div>
            {articles[0].multimedia && articles[0].multimedia[0] && (
              <img src={articles[0].multimedia[0].url} alt={articles[0].title} />
            )}
          </>
        )}
      </div>
      <div className="hero-side-articles">
        {articles.slice(1).map(article => (
          <div key={article.url} className="hero-side-article">
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <a href={articles.url} target='_blank'>Read more</a>
            <div className="article-meta">
              <span>{article.byline}</span>
            </div>
            {article.multimedia && article.multimedia[0] && (
              <img src={article.multimedia[0].url} alt={article.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBlockArticles;
