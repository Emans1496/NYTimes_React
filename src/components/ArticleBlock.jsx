import React, { useEffect, useState } from 'react';
import { fetchTopStories } from '../utils/FetchTopStories';

const ArticleBlock = ({ section, count }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopStories = async () => {
      try {
        const data = await fetchTopStories(section);
        setArticles(data.slice(0, count));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTopStories();
  }, [section, count]);

  if (loading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <div>
      {articles.map(article => (
        <div key={article.url}>
          <img src={article.multimedia[0].url} alt={article.title}/>
          <h2>{article.title}</h2>
          <p>{article.abstract}</p>
          <p>{article.section}</p>
          <p>{article.subsection}</p>
         <p>{article.published_date}</p>

        </div>
      ))}
    </div>
  );
};

export default ArticleBlock;
