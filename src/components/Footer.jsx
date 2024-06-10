import React from 'react';
import '../style/Footer.css';

function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png"
                        alt="logo" className='footer-img' />
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <p><strong>News</strong></p>
                        <ul className='footer-list'>
                            <a href='https://www.nytimes.com/' target='_blank'>Home Page</a>
                            <a href='https://www.nytimes.com/' target='_blank'>U.S.</a>
                            <a href='https://www.nytimes.com/' target='_blank'>World</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Politics</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Education</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Sports</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Business</a>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <p><strong>Arts</strong></p>
                        <ul className='footer-list'>
                            <a href='https://www.nytimes.com/' target='_blank'>Books</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Dance</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Movies</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Music</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Television</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Theater</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Visual arts</a>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <p><strong>Lifestyle</strong></p>
                        <ul className='footer-list'>
                            <a href='https://www.nytimes.com/' target='_blank'>Health</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Well</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Food</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Love</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Style</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Fashion</a>
                            <a href='https://www.nytimes.com/' target='_blank'>T magazine</a>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <p><strong>More</strong></p>
                        <ul className='footer-list'>
                            <a href='https://www.nytimes.com/' target='_blank'>Audio</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Games</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Cooking</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Video</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Graphics</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Trending</a>
                            <a href='https://www.nytimes.com/' target='_blank'>Jobs</a>
                        </ul>
                    </div>
                <div>
                    <div className='row'>
                        <div className='col-12 mt-3'>
                            <p className='footer-p'>© 2022 The New York Times Company. All Rights Reserved.</p>
                        </div>
                    </div>
            </div>
            </div>
         </div>
    </div>
    )
}




export default Footer;