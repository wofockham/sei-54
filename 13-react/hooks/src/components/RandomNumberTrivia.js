import React, { Component } from 'react';
import axios from 'axios';

class RandomNumberTrivia extends Component {
    constructor() {
        super();
        this.state = {
            fact: 'Loading...'
        };
    }

    // React lifecycle methods
    componentDidMount() {
        axios.get('http://numbersapi.com/random/trivia').then((response) => {
            this.setState({fact: response.data});
        });
    }

    render() {
        return (
            <p>{ this.state.fact }</p>
        );
    }
}

export default RandomNumberTrivia;