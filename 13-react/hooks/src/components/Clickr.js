import React, { useState } from 'react';

const Clickr = () => {
    // array destructuring
    const [clicks, setClicks] = useState(0); // 0: initial state

    const _handleClick = () => {
        setClicks(clicks + 1); // setClicks will rerun Clickr() WITH THE NEW VALUE
    };

    return (
        <button onClick={ _handleClick }>
            { clicks } clicks so far
        </button>
    );
};

export default Clickr;