import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className='Nav'>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/create' exact>
        Create
      </NavLink>
    </div>
  );
};
