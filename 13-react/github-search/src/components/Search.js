import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const _handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/profile/${ username }`); // Programmatic navigation
    };

    return (
        <div>
            <h2>Search Github by username</h2>
            <form onSubmit={ _handleSubmit }>
                <label>
                    Username:
                    <input type="search" required onChange={ (e) => setUsername(e.target.value) } />
                </label>
                <button>Search for { username }</button>
            </form>
        </div>
    );
};

export default Search;