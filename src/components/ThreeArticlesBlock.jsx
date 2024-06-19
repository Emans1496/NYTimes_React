import React, { useState, useEffect } from 'react';
import fetchTopStories from '../utils/FetchTopStories';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../style/ThreeAB.css';

const ThreeArticlesBlock = ({ section }) => {
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
    return <Skeleton height={400} count={3} />;
  }

  if (!articles.length) {
    return <div>No articles found</div>;
  }

  return (
    <div className="three-articles-block">
      <div className="articles-left">
        {articles.map((article, index) => (
          <div key={index} className="article-content">
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
            {index < articles.length - 1 && <hr />}
          </div>
        ))}
      </div>
      <div className="image-right">
        <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
          <img src={articles[0].multimedia?.[0]?.url} alt={articles[0].title} className="article-image" />
        </a>
      </div>
    </div>
  );
};

export default ThreeArticlesBlock;
