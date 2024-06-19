import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Games = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Games - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="movies" />

        </div>
    );
};

export default Games;
