import React, { Component } from 'react';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            height: 100 // initial state
        };
        this._zoomIn = this._zoomIn.bind(this);
        this._zoomOut = this._zoomOut.bind(this);
    }

    _zoomIn() {
        this.setState({height: this.state.height + 10});
    }

    _zoomOut() {
        this.setState({height: this.state.height - 10});
    }

    render() {
        const { name, age, motto, pic } = this.props; // destructuring
        return (
            <div>
                <h2>{ name }</h2>
                <h4>{ age }</h4>
                <h3>Motto: { motto }</h3>

                <div>
                    <button onClick={ this._zoomIn }>+</button>
                    <button onClick={ this._zoomOut }>-</button>
                </div>

                <img src={ pic } alt={ name } height={ this.state.height } />
            </div>
        );
    }
}

export default Profile;