import React, { useState } from 'react';
import '../style/Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"
                        alt="New York Times"
                    />
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <li className="navbar-item"><a href="#">U.S.</a></li>
                    <li className="navbar-item"><a href="#">World</a></li>
                    <li className="navbar-item"><a href="#">Business</a></li>
                    <li className="navbar-item"><a href="#">Arts</a></li>
                    <li className="navbar-item"><a href="#">Lifestyle</a></li>
                    <li className="navbar-item"><a href="#">Opinion</a></li>
                    <li className="navbar-item"><a href="#">Audio</a></li>
                    <li className="navbar-item"><a href="#">Games</a></li>
                    <li className="navbar-item"><a href="#">Cooking</a></li>
                    <li className="navbar-item"><a href="#">Wirecutter</a></li>
                    <li className="navbar-item"><a href="#">The Athletic</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
