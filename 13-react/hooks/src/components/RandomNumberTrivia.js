import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomNumberFact = () => {
    const [fact, setFact] = useState('Loading...');

    useEffect(() => {
        axios.get('http://numbersapi.com/random/trivia').then((response) => {
            setFact(response.data);
        });
    }, []); // empty array means "run this function only once"

    return (
        <p>{ fact }</p>
    );
};

export default RandomNumberFact;
