import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const World = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>World - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="world" />

        </div>
    );
};

export default World;
