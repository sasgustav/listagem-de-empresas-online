import * as React from 'react';
import { Seo } from '../components/seo';
import Header from '../components/Header/Header';

const IndexPage = () => {
  return (
    <main>
      <Seo title="Página Sobre - Seu Site Incrível" />
      <Header />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
