import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Business = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Business - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="business" />
 
        </div>
    );
};

export default Business;
