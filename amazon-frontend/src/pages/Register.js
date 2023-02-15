import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { register} from '../actions/UserAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import "../styles/Register.css"

const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();

    const registerHandler = (e) => {
        e.preventDefault();
        if(password !== confirmpassword){
            alert("Password does not match.")
        }
        else{
            dispatch(register(name,email,password));
        }
        
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect ,userInfo])
    



    return (
        <div className="register-container">
            <form className="form" onSubmit={registerHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

                <div className="form-ip-sec">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"
                    placeholder="Enter full name"
                    required
                    onChange={(e) => setName(e.target.value)}>
                    </input>
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

                <div className="form-ip-sec">
                    <label htmlFor="confirmpassword">Password:</label>
                    <input type="password" id="confirmpassword"
                    placeholder="Confirm password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}>
                    </input>
                </div>


                <div>
                    <label/>
                    <button className="submit-btn" type="submit">
                        Register
                    </button>
                </div>
                <div className="new-user-register">
                    <label/>
                    <div>
                        Already have an account?
                        <Link to={`/signin?redirect=${redirect}`}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
