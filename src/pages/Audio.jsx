import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Audio = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Audio - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="theater" />
  
        </div>
    );
};

export default Audio;
