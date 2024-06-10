import React from 'react';
import ArticleBlock from './ArticleBlock';



const TwoArticlesBlock = ({section,count,className}) => (
    <div className={className}>
  <ArticleBlock section={section} count={count}/>
  </div>
);

export default TwoArticlesBlock;
