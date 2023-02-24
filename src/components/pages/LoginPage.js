

import '../../App.css'

import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
 
const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            history.push("/home")
            console.log(user);
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return (
        <>
          <main>
            <section>
              <div className="text-center">
                <p className="form-header">VurbL</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="email-address">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <Link to="/home">
                      <button
                        className="btn btn-primary"
                        onClick={onLogin}
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </form>
                <p className="form-footer text-sm text-center">
                  No account yet?{' '}
                  <NavLink to="/register" className="form-link">
                    Sign up
                  </NavLink>
                </p>
              </div>
            </section>
          </main>
        </>
      );}
 
export default LoginPage;
