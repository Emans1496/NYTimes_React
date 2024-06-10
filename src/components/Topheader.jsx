import React from 'react';
import '../style/TopHeader.css';

function TopHeader() {
    return (
        <div className="top-header">
            <div className="row">
                <ul>
                    <li><a href="#">U.S.</a></li>
                    <li><a href="#">International</a></li>
                    <li><a href="#">Canada</a></li>
                    <li><a href="#">Español</a></li>
                    <li><a href="#">中文</a></li>
                </ul>
            </div>
        </div>
    );
}

export default TopHeader;
