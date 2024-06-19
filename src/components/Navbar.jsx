import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"
                        alt="New York Times"
                    />
                    </NavLink>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <li className="navbar-item"><NavLink to="/">Home</NavLink></li>
                    <li className="navbar-item"><NavLink to="/world">World</NavLink></li>
                    <li className="navbar-item"><NavLink to="/business">Business</NavLink></li>
                    <li className="navbar-item"><NavLink to="/arts">Arts</NavLink></li>
                    <li className="navbar-item"><NavLink to="/lifestyle">Lifestyle</NavLink></li>
                    <li className="navbar-item"><NavLink to="/opinion">Opinion</NavLink></li>
                    <li className="navbar-item"><NavLink to="/audio">Audio</NavLink></li>
                    <li className="navbar-item"><NavLink to="/games">Games</NavLink></li>
                    <li className="navbar-item"><NavLink to="/cooking">Cooking</NavLink></li>
                    <li className="navbar-item"><NavLink to="/wirecutter">Wirecutter</NavLink></li>
                    <li className="navbar-item"><NavLink to="/theathletic">The Athletic</NavLink></li>
                </ul>
            </div>
            <span className='divider2'></span>
            <span className='divider2'></span>
        </nav>
    );
}

export default Navbar;
