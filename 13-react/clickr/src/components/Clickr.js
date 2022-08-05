import React, { Component } from 'react'; // destructuring

class Clickr extends Component {
    constructor() {
        super(); // You must add super().
        this.state = {
            clicks: 0
        };

        // Event handlers need to be bound (for extremely boring technical reasons)
        this._incrementCount = this._incrementCount.bind(this);
    }   

    // Methods with start with _ are conventionally understood to be event handlers.
    _incrementCount() {
        this.setState({ clicks: this.state.clicks + 1 }); // no mutation
    }

    render() {
        return (
            <button onClick={ this._incrementCount }>
                { this.state.clicks } clicks so far
            </button>
        );
    }
}

export default Clickr;