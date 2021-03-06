import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import initials from '../App/images/initials.png';
import email from './images/icons/email.jpg';
import social from './images/icons/social.png';
import github from './images/icons/github.jpg';
import home from './images/icons/home.jpg';
import experience from './images/icons/experience.png';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/"><img className="homeLogo" src={initials} /></Link>
                <div className="innerNav">
                    <Link to="/"><img src={home} className="link" /></Link>
                    <Link to="/github"><img src={github} className="link" /></Link>
                    <Link to="/experience"><img src={experience} className="link" /></Link>
                    <Link to="/social"><img src={social} className="link" /></Link>
                    <Link to="/email"><img src={email} className="link" /></Link>
                </div>
            </div>
        )
    }
}

export default NavBar;
