import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = ({ dogs }) => {
  return (
    <nav className='Nav'>
      <NavLink exact to='/dogs'>Dogs</NavLink>
      {
        dogs.map(dog => (
          <NavLink key={dog.name} exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
        ))
      }
    </nav>
  );
}

export default Nav;