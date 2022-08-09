import React, { Component, useState } from 'react';

class Secrets extends Component {
    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm />
                <SecretsList />
            </div>
        );
    }
}

const SecretForm = (props) => {
    const [content, setContent] = useState('');

    const _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: actually handle the submit
    };

    const _handleChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onChange={ _handleChange }></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            secrets list coming soon
        </div>
    );
}

export default Secrets;
