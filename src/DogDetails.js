import React from 'react';
import { useParams } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ dogs }) => {

  const { name } = useParams();

  const { age, src, facts } = dogs.find(dog => dog.name === name);

  return (
    <div className='DogDetails'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <img className="DogDetails-img" src={src} alt={name} />
      <ul>
        Facts
        {facts.map(fact => <li key={fact}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;