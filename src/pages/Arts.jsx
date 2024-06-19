import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Arts = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Arts - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="arts" />

        </div>
    );
};

export default Arts;
