import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  const uid = useSelector(state => state.firebase.auth.uid);
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
          {uid && <SignedInLinks />}
          {!uid && <SignedOutLinks />}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;