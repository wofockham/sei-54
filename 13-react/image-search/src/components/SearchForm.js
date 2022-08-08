import React, { useState } from 'react';

const SearchForm = (props) => {

    const [query, setQuery] = useState('');

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
    };

    const _handleInput = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" required placeholder="butterfly" onInput={ _handleInput } />
            <input type="submit" value={ `Search for ${ query }` } />
        </form>
    );
};

export default SearchForm;