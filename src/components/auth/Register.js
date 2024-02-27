import React, { useState } from 'react';
import { auth } from '../../firebase'; 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password, firstname, lastname);
            console.log('User registered:', userCredential.user);
            // Optionally, you can redirect the user to another page upon successful registration
        } catch (err) {
            setError(err.message);
            console.error('Registration failed:', err);
        }
    };

    return (
        <div className='container'>
            <h5 className="grey-text text-darken-3">Register</h5>
            <form className='white' onSubmit={handleRegister}>
                <div className="input-field">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-field">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-field">
                    <label>First Name:</label>
                    <input type="password" value={password} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="input-field">
                    <label>Last Name:</label>
                    <input type="password" value={password} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="input-field">
                    <button className="btn primary-btn lighten-1 z-depth-0">Register</button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Register;
