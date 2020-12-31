import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { signin } from '../actions/USerAction';
import "../styles/SignIn.css"

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(signin(email,password));
    }



    return (
        <div className="signin-container">
            <form className="form" onSubmit={submitForm}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div className="form-ip-sec">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>

                <div className="form-ip-sec">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"
                    placeholder="Enter password"
                    required
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label/>
                    <button className="submit-btn" type="submit">
                        Sign In
                    </button>
                </div>
                <div className="new-user-register">
                    <label/>
                    <div>
                        New user?
                        <Link to="/register">
                            Create Account
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
