import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="logo">
        <Link to='/' className="brand-logo">PiggyBon</Link>
      </div>
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <SignedInLinks />
          <SignedOutLinks />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;