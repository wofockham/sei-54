import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Page">
            <p>This is the about page</p>
        </Layout>
    );
};

export const Head = () => <title>About Page</title>;

export default AboutPage;