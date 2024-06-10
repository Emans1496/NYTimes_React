import React from 'react';
import Header from './components/Topheader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OneArticleBlock from './components/OneArticlesBlock';
import HeroBlockArticles from './components/HeroBlockArticles';
import ThreeArticlesBlock from './components/ThreeArticlesBlock';
import './style/App.css';



function App() {
  return (
    <div className="App">
      <main className="main-content">
        {/* Aggiungi i blocchi degli articoli  */}
        <Header></Header>
        <Navbar></Navbar>
        <HeroBlockArticles section="home" />
        <OneArticleBlock section="us" />
        <OneArticleBlock section="arts" />
        <ThreeArticlesBlock section="technology" />
        <ThreeArticlesBlock section="world" />
        <OneArticleBlock section="food"/>
        <HeroBlockArticles section="sports" />
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
