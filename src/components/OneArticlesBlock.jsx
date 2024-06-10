import React, { useEffect, useState } from 'react';
import { fetchTopStories } from './FetchTopStories';
import '../style/OneAB.css';


const OneArticleBlock = ({ section }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopStory = async () => {
      try {
        const data = await fetchTopStories(section);
        setArticle(data[0]); // Prendi solo il primo articolo
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTopStory();
  }, [section]);

  if (loading) return <div>Caricamento in corso...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    article && (
      <div className="one-article-block">
        <div className="article-content">
          <a href={article.url} target='_blank'><h1>{article.title}</h1></a>
          <a href={article.url} target='_blank'><p>{article.abstract}</p></a>
          <a href={article.url} target='_blank'>Read more</a>
          <div className="article-meta">
            <span>{article.byline}</span>
          </div>
        </div>
        {article.multimedia && article.multimedia[0] && (
          <a href={article.url} target='_blank'><img src={article.multimedia[0].url} alt={article.title} /></a>
        )}
      </div>
    )
  );
};

export default OneArticleBlock;
