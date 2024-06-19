import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Cooking = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Cooking - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="food" />
            
        </div>
    );
};

export default Cooking;
