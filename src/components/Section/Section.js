import React from 'react';
import LinkItem from '../LinkItem/LinkItem';
import './Section.css';

const Section = ({ title, description, links }) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
      <ul className="link-list">
        {links.map(link => (
          <LinkItem key={link.url} link={link} />
        ))}
      </ul>
    </section>
  );
};

export default Section;
