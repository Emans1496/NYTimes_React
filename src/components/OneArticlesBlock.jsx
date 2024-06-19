import React, { useState, useEffect } from 'react';
import fetchTopStories from '../utils/FetchTopStories';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../style/OneAB.css';

const OneArticleBlock = ({ section }) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopStories(section);
      setArticle(data[0]);
      setLoading(false);
    };

    fetchData();
  }, [section]);

  if (loading) {
    return <Skeleton height={400} />;
  }

  if (!article || !article.url) {
    return <div>No articles found</div>;
  }

  return (
    <div className="one-article-block">
      <div className="article-content">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h2>{article.title}</h2>
        </a>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <p>{article.abstract}</p>
        </a>
        <span className="article-meta">{article.byline} &bull; {new Date(article.published_date).toLocaleDateString()}</span>
        <span className="read-more">
          <div>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </span>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="image-link">
        <img src={article.multimedia?.[0]?.url} alt={article.title} className="article-image" />
      </a>
    </div>
  );
};

export default OneArticleBlock;
