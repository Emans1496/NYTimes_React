import React from 'react';
import { Helmet } from 'react-helmet';
import HeroBlockArticles from '../components/HeroBlockArticles';
import OneArticleBlock from '../components/OneArticlesBlock';
import ThreeArticlesBlock from '../components/ThreeArticlesBlock';

const Wirecutter = () => {
    return (
        <div className="main-content">
            <Helmet>
                <title>Wirecutter - NY Times Clone</title>
            </Helmet>
            <HeroBlockArticles section="travel" />

        </div>
    );
};

export default Wirecutter;
