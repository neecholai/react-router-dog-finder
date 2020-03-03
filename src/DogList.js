import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';


const DogList = ({ dogs }) => {
  return (
    <div className='DogList'>
      {
        dogs.map(dog => (
          <div key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>
              {dog.name}<br />
              <img className='DogList-img' src={dog.src} alt={dog.name} />
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default DogList;