import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Lifestyle = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Lifestyle - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="nyregion" />

        </div>
    );
};

export default Lifestyle;
