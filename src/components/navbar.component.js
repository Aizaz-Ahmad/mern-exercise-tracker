import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>
          ExerciseTracker
        </Link>
        <div className='navbar-collapse collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link'>
                Exercises
              </Link>
            </li>
            <li className='navbar-item ml-5'>
              <Link to='/create' className='navbar-link'>
                Create Exercise Log
              </Link>
            </li>
            <li className='navbar-item ml-5'>
              <Link to='/user' className='navbar-link'>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
