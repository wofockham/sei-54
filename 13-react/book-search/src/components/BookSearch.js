import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
    const [query, setQuery] = useState(''); // array destructuring
    const [cover, setCover] = useState('');

    const _search = async (e) => {
        e.preventDefault();
        const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=title:' + query);
        setCover(data.items[0].volumeInfo.imageLinks.thumbnail);
    };

    return (
        <div>
            <form onSubmit={ (_search) }>
                <label>
                    Book title:
                    <input
                        type="search"
                        placeholder="Jaws"
                        autoFocus
                        required
                        onChange={ (e) => setQuery(e.target.value) }
                    />
                </label>

                <button>Search</button>
            </form>

            { cover && <img src={ cover } alt={ query } /> }
        </div>
    );
};

export default BookSearch;