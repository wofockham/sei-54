import React from 'react';

const Gallery = (props) => {
    console.log(props);
    return (
        <div>
            { props.images.map((url) => <img src={url} key={url} />) }
        </div>
    );
};

export default Gallery;