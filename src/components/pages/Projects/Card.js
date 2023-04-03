import React from 'react';
import { MdCode, MdFavorite } from 'react-icons/md';
import './Card.css';

const Card = ({ title, description, image, link }) => {
  return (
    <div class="card-container">
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Learn More</a>
      <div className="icon">
        <MdCode />
      </div>
    </div>
    </div>
  );
};

export default Card;
