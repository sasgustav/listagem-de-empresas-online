import * as React from 'react';
import { Seo } from '../components/seo';
import Layout from './layout';


const IndexPage = () => {
  return (
    <Layout>
      <h1>Olá mundo</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <Seo title="Página Inicial - Seu Site Incrível" />
    <title>Home Page</title>
  </>
);
