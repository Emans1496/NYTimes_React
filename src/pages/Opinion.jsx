import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Opinion = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Opinion - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="opinion" />

        </div>
    );
};

export default Opinion;
