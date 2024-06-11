import React, { useEffect, useState } from 'react';
import { fetchTopStories } from './FetchTopStories';
import '../style/ThreeAB.css'

const ThreeArticlesBlock = ({ section }) => {
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
    <div className="three-articles-block">
      <div className="top-articles">
        {articles.slice(0, 2).map(article => (
          <div key={article.url} className="top-article">
            <a href={article.url}  target='_blank'><h2>{article.title}</h2></a>
            <a href={article.url}  target='_blank'><p>{article.abstract}</p></a>
            <a href={article.url} target='_blank'>Read more</a>
            <div className="article-meta">
              <span>{article.byline}</span>
            </div>
          </div>
        ))}
      </div>
      {articles[2] && (
        <div className="bottom-article">
          <div className="article-content">
            <a href={articles[2].url} target='_blank'><h2>{articles[2].title}</h2></a>
              <a href={articles[2].url} target='_blank'><p>{articles[2].abstract}</p></a>
                <a href={articles[2].url} target='_blank'>Read more</a>
                <div className="article-meta">
                  <span>{articles[2].byline}</span>
                </div>
              </div>
              {articles[2].multimedia && articles[2].multimedia[0] && (
                <a href={articles[2].url}  target='_blank'><img src={articles[2].multimedia[0].url} alt={articles[2].title} /></a>
              )}
          </div>
      )}
        </div>
      );
};

      export default ThreeArticlesBlock;
