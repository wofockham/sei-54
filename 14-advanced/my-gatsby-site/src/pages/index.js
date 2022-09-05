import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Gatsby Home Page">
      <p>This is the home page</p>
    </Layout>
  );
};

export const Head = () => <title>Gatsby Tutorial Home Page</title>;

export default IndexPage;