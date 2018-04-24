import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './pages/home.jsx';
import Github from './pages/github.jsx';
import Particles from './Particles.jsx';
import NavBar from './Nav.jsx';
import '../styles.less';
import initials from './assets/images/initials.png';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="root">
                    <Particles />
                    <img className="initials" src={initials}></img>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/github" component={Github} />
                </div>
            </Router>
        )
    }
}

export default App;
