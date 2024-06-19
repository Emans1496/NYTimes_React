import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopHeader from './components/Topheader';
import Footer from './components/Footer';
import Home from './pages/Home';
import World from './pages/World';
import Business from './pages/Business';
import Arts from './pages/Arts';
import Lifestyle from './pages/Lifestyle';
import Opinion from './pages/Opinion';
import Audio from './pages/Audio';
import Games from './pages/Games';
import Cooking from './pages/Cooking';
import Wirecutter from './pages/Wirecutter';
import TheAthletic from './pages/TheAthletic';

function App() {
    return (
            <div>
                <TopHeader />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/world" element={<World />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/arts" element={<Arts />} />
                    <Route path="/lifestyle" element={<Lifestyle />} />
                    <Route path="/opinion" element={<Opinion />} />
                    <Route path="/audio" element={<Audio />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/cooking" element={<Cooking />} />
                    <Route path="/wirecutter" element={<Wirecutter />} />
                    <Route path="/theathletic" element={<TheAthletic />} />
                </Routes>
                <Footer />
            </div>
    );
}

export default App;
