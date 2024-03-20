import React from 'react';
import { NavLink, useHistory   } from 'react-router-dom';
import firebase from 'firebase/app';

const SignedInLinks = () => {
  const history = useHistory();

  const handleSignOut = (event) => {
    event.preventDefault(); // Prevent the default behavior of NavLink

    firebase.auth().signOut()
      .then(() => {
        console.log('Signed Out');
        history.push("/login");
      })
      .catch((error) => {
        console.error('Sign Out Error', error);
      });
  };

  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>New Transaction</NavLink></li>
        <li><NavLink to='/login' onClick={handleSignOut}>Log Out</NavLink></li>
        {/* <li><NavLink to='/' className="btn btn-floating pink lighten-1">Smn</NavLink></li> */}
      </ul>
    </div>
  )
}

export default SignedInLinks;