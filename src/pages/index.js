import * as React from 'react';
import { Seo } from '../components/seo';

const IndexPage = () => {
  return (
    <main>
      <Seo title="Página Sobre - Seu Site Incrível" />
      <h1>Home Page</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
