import React from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';

const FlickrSearch = () => {
    return (
        <div>
            <h1>Image Search</h1>
            <SearchForm />
            <Gallery />        
        </div>
    );
};

export default FlickrSearch;