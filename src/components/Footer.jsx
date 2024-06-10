import React, { useState } from 'react';
import '../style/Footer.css';

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"
                        alt="logo" 
                        className='footer-img' 
                    />
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`footer-menu ${isOpen ? 'open' : ''}`}>
                    <div className='footer-section'>
                        <p><strong>News</strong></p>
                        <ul className='footer-list'>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Home Page</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>U.S.</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>World</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Politics</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Education</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Sports</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Business</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <p><strong>Arts</strong></p>
                        <ul className='footer-list'>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Books</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Dance</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Movies</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Music</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Television</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Theater</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Visual arts</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <p><strong>Lifestyle</strong></p>
                        <ul className='footer-list'>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Health</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Well</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Food</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Love</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Style</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Fashion</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>T magazine</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <p><strong>More</strong></p>
                        <ul className='footer-list'>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Audio</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Games</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Cooking</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Video</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Graphics</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Trending</a></li>
                            <li><a href='https://www.nytimes.com/' target='_blank'>Jobs</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p className='footer-p'>© 2022 The New York Times Company. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
