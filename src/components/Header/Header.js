import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import './Header.css'; // Importe o arquivo CSS externo

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return React.createElement('header', { className: 'header-container' }, [
    React.createElement('div', { className: 'header' }, [
      React.createElement(Link, { to: '/', className: 'logo' }, data.site.siteMetadata.title),
      React.createElement('nav', { className: 'nav' }, [
        React.createElement(Link, { to: '/saude', className: 'nav-link', activeClassName: 'active' }, 'Saúde'),
        React.createElement(Link, { to: '/educacao', className: 'nav-link', activeClassName: 'active' }, 'Educação'),
        // ... outros links
      ]),
      React.createElement('div', { className: 'actions' }, [
        React.createElement('div', { className: 'search' }, [
          React.createElement('input', { type: 'text', className: 'search-input', placeholder: 'Buscar...' }),
          React.createElement('button', { className: 'search-button' }, 'Buscar')
        ]),
        React.createElement('button', { className: 'submit-button' }, 'Submeter Link')
      ])
    ])
  ]);
};

export default Header;