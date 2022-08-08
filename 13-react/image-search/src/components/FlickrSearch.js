import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Gallery from './Gallery';

class FlickrSearch extends Component {
    constructor() {
        super();
        this.fetchImages = this.fetchImages.bind(this);
        this.state = {
            images: []
        };
    }

    fetchImages(q) {
        const generateURL = function (p) {
            return [
                'http://farm',
                p.farm,
                '.static.flickr.com/',
                p.server,
                '/',
                p.id,
                '_',
                p.secret,
                '_q.jpg' // change 'q' to something else for different sizes (see documentation)
            ].join('');
        };

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
            const images = response.data.photos.photo.map(generateURL);
            this.setState({images: images});
        });
    }

    render() {
        return (
            <div>
                <h1>Image Search</h1>
                <SearchForm onSubmit={ this.fetchImages } />
                <Gallery images={ this.state.images } />        
            </div>
        );
    }
}

export default FlickrSearch;