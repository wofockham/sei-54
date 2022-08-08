import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Gallery from './Gallery';

class FlickrSearch extends Component {
    constructor() {
        super();
        this.fetchImages = this.fetchImages.bind(this);
    }

    fetchImages(q) {
        console.log('searching flickr for', q);
        const flickrURL = 'https://api.flickr.com/services/rest';
        const flickrParams = {
            method: 'flickr.photos.search',
            api_key: '2f5ac274ecfac5a455f38745704ad084',
            text: q,
            format: 'json',
            nojsoncallback: 1
        };

        axios(flickrURL, { params: flickrParams }).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <h1>Image Search</h1>
                <SearchForm onSubmit={ this.fetchImages } />
                <Gallery />        
            </div>
        );
    }
}

export default FlickrSearch;