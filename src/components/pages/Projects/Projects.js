import React from 'react';
import Card from './Card';
import './Card.css';

const cardsData = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="portfolio">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} link={card.link} />
      ))}
    </div>
  );
};

export default Projects;
