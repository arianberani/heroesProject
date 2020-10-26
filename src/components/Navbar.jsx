import React, { Component } from 'react';
import './style.scss'

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="section-2">
                <div className='some-page-wrapper'>
                    <div className="container">
                        <div className='row'>
                            <div className='column'>
                                <div className='menu-column '>
                                    <img alt="logo" src={require('../img/Logo.png')} />
                                </div>
                            </div>

                            <div className='column-menu'>
                                <div className='menu-column '>
                                    <ul className="language">
                                        {/* <li className="language-li menu-li">HOME<Link to={"/"}> </Link></li> */}
                                        <li onClick={() => window.location.href = "/"} className="language-li menu-li">HOME</li>
                                        <li className="language-li menu-li">ROOMS</li>
                                        <li className="language-li menu-li">RESTURANT</li>
                                        <li className="language-li menu-li">SHOP</li>
                                        <li className="language-li menu-li">BLOG</li>
                                        <li className="language-li menu-li">PAGES</li>
                                        <li className="language-li menu-li">CONTACT</li>
                                    </ul>
                                </div>

                            </div>

                            <div className='column'>
                                <div className='menu-column '>
                                    <ul className="language">
                                        <li className="social-media language-li"><a href="/"><i className="fa fa-lg fa-facebook"></i></a></li>
                                        <li className="social-media language-li"><a href="/"><i className="fa fa-lg fa-twitter"></i></a></li>
                                        <li className="social-media language-li"><a href="/"><i className="fa fa-lg fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h1>BROWSE ROOMS</h1>
                </div>
            </div>

        );
    }
}

export default Navbar;