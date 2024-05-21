import React from 'react';

import Hero from '../components/Hero/Hero';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';
import SubmitLinkForm from '../components/SubmitLinkForm/SubmitLinkForm';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from './layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allDirectoryListingJson {
        edges {
          node {
            id
            title
            description
            links {
              name
              url
              description
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero />
      <SearchBar />
      {data.allDirectoryListingJson.edges.map(({ node }) => (
        <Section key={node.id} title={node.title} description={node.description} links={node.links} />
      ))}
      <SubmitLinkForm />
      <AdditionalInfo />
    </Layout>
  );
};

export default IndexPage;
