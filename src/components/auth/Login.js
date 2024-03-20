import React, { Component } from 'react';
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  
    state = {
        email: '',
        password: ''
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
      }

    render() {
      const { uid } = this.props;
      if(uid) return <Redirect to="/"/>
      return (
      <div className='container'>
          <form className='white' onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
              <button className="btn primary-btn lighten-1 z-depth-0">Login</button>
          </div>
          </form>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);


