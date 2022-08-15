import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberTrivia = () => {
    const [number, setNumber] = useState(777);
    const [fact, setFact] = useState('');

    useEffect(() => {
        axios.get(`http://numbersapi.com/${ number }/trivia`).then((response) => {
            setFact(response.data);
        });
    }, [number]); // rerun this AJAX request whenever number changes.

    const _handleSubmit = (e) => {
        e.preventDefault();
    };

    const _handleInput = (e) => {
        setNumber(e.target.value);
    };
 
    return (
        <form onSubmit={ _handleSubmit }>
            <p>{  fact }</p>
            <input type="number" placeholder="Enter a number" required onInput={ _handleInput } />
        </form>

    );
};

export default NumberTrivia;