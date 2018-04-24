import React, { Component } from 'react';
import axios from 'axios';

class Stats extends Component {
    constructor (props) {
        super(props); // TODO: What is this??
        this.state = {
            username: '',
            repoCount: '',
            currentCompany: '',
            bio: '',
            reposUrl: '',
        };

        this.getStats();
    }

    getStats() {
        axios.get(`https://api.github.com/users/${this.props.username}`)
            .then((response) => {
                const data = response.data;
                this.setState({
                    username: data.name,
                    repoCount: data.public_repos,
                    currentCompany: data.company,
                    bio: data.bio,
                    reposUrl: data.repos_url,
                });
            });
    }

    render() {
        return (
            <div className="stats">
                <h1>{this.state.username}</h1>
                <h1>Current Company: {this.state.currentCompany}</h1>
                <h1>Bio: {this.state.bio}</h1>
                <h1>Number of repos: {this.state.repoCount}</h1>
            </div>
        )
    }
}

class Github extends Component {

    constructor () {
        super();
        this.state = {
            username: 'raymondborkowski',
            sort: 'pushed',
            type: 'all',
        };
        this.getRepos();
    }

    getRepos() {
        axios.get(`https://api.github.com/users/${this.state.username}/repos?sort=${this.state.sort}type=${this.state.type}`)
            .then((response) => {
                const importantInfo = response.data.map((repo) => {
                    return {
                        description: repo.description,
                        name: repo.name,
                        url: repo.html_url,
                        language: repo.language,
                    };
                });
                console.log(importantInfo);
            });
    }

    render () {
        return (
            <div className='github'>
                <Stats username={this.state.username}/>
            </div>
        );
    }
}

export default Github;
