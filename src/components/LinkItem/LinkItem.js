import React from 'react';
import './LinkItem.css';

const LinkItem = ({ link }) => {
  return (
    <li className="link-item">
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
      {link.description && <p>{link.description}</p>}
    </li>
  );
};

export default LinkItem;
