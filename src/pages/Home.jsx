import React from 'react';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="main-content">
      <Helmet>
        <title>Home - NY Times Clone</title>
      </Helmet>
      <HeroBlockArticles section="home" />
      <ThreeArticlesBlock section="technology" />
      <OneArticleBlock section="movies" />
      <ThreeArticlesBlock section="food" />
      <OneArticleBlock section="us" />
      <HeroBlockArticles section="sports" />
    </div>
  );
};

export default Home;
