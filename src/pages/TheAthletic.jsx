import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const TheAthletic = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>The Athletic - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="sports" />
        </div>
    );
};

export default TheAthletic;
