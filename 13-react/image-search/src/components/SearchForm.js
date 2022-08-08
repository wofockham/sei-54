import React, { Component } from 'react';

class SearchForm extends Component {
    _handleSubmit(event) {
        event.preventDefault(); // Disable the form submission.

        // pass the search term from state to the parent
    }

    _handleInput(event) {
        console.log(event);
    }

    render() {
        return (
            <form onSubmit={ this._handleSubmit }>
                <input type="search" required placeholder="butterfly" />
                <input type="submit" value="Search" />
            </form>
        );
    }
};

export default SearchForm;