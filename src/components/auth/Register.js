import React, { useState, Component } from 'react';
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// import { auth } from '../../firebase'; 

class Register extends Component {
    state = {
        email: "",
        password: ""
      };
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
      };

    render() {
      const { uid } = this.props;
      if (uid) return <Redirect to="/" />;

        return (
            <div className='container'>
                <h5 className="grey-text text-darken-3">Register</h5>
                <form className='white' onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label>Email:</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label>Password:</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    {/* <div className="input-field">
                        <label>Your Name:</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div> */}
                    <div className="input-field">
                        <button className="btn primary-btn lighten-1 z-depth-0">Register</button>
                    </div>
                </form>
                {/* {error && <p>{error}</p>} */}
            </div>
        );
    }

    
};

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
      uid: uid,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (creds) => dispatch(signUp(creds)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
