import React, { Component, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Later: change this to the deployed URL

class Secrets extends Component {
    constructor() {
        super();
        this.state = {
            secrets: []
        };

        this.saveSecret = this.saveSecret.bind(this);
    }

    // React's lifecycle methods
    componentDidMount() {
        const fetchSecrets = () => {
            axios(SERVER_URL).then((response) => {
                this.setState({secrets: response.data});
            });
            setTimeout(fetchSecrets, 9000); // recursive setInterval: POLLING
        };

        fetchSecrets();
    }

    saveSecret(content) {
        axios.post(SERVER_URL, { content: content }).then((response) => {
            this.setState({secrets: [response.data, ...this.state.secrets]})
        });
    }

    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm onSubmit={ this.saveSecret } />
                <SecretsList secrets={ this.state.secrets } />
            </div>
        );
    }
}

const SecretForm = (props) => {
    const [content, setContent] = useState('');

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent(''); // clear the <textarea>
    };

    const _handleChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onChange={ _handleChange } value={ content } required></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            <p>{ props.secrets.length } secrets</p>
            { props.secrets.map((s) => <p key={ s.id }>{ s.content }</p>) }
        </div>
    );
}

export default Secrets;
