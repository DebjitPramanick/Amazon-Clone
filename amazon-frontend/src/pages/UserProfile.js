import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/UserAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/UserConstant';
import "../styles/UserProfile.css";

const UserProfile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    
    const userSignin = useSelector((state) => state.userSignin);
    const userDetails = useSelector((state) => state.userDetails);
    const userUpdateProfile = useSelector((state)=>state.userUpdateProfile);

    const {userInfo} = userSignin;
    const {loading,error,user} = userDetails;
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate
    } = userUpdateProfile;

    const dispatch = useDispatch();

    useEffect(() => {
        if(!user){
            dispatch({
                type: USER_UPDATE_PROFILE_RESET
            })
           dispatch(detailsUser(userInfo._id)); 
        }
        else{
            setName(user.name);
            setEmail(user.email);
        }
        
    }, [dispatch, userInfo._id,user]);


    const updateDetails = (e) =>{
        e.preventDefault();

        if(password != confirmpassword){
            alert('Password does not match.')
        }
        else{
            dispatch(updateUserProfile({
                userId: user._id,
                name,
                email,
                password
            }));
        }
    }

    return (
        <div className="user-dets-container">
           <form className="form" onSubmit={updateDetails}>
            <h1>User Profile</h1>
            {
                loading? <LoadingBox></LoadingBox>
                :
                error? (
                    <MessageBox variant="danger">{error}</MessageBox>
                )
                :
                (
                    <>
                    {loading && <LoadingBox></LoadingBox>}
                    {errorUpdate && <MessageBox variant="danger"></MessageBox>}
                    {successUpdate && <MessageBox variant="success">Profile updated successfully.</MessageBox>}
                    <div className="form-ip-sec">
                        <label htmlFor="name">Name:</label>
                        <input type="name" id="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}>
                        </input>
                    </div>

                    <div className="form-ip-sec">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                    </div>

                    <div className="form-ip-sec">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"
                        placeholder="Enter password"
                        onChange={(e)=> setPassword(e.target.value)}>
                        </input>
                    </div>

                    <div className="form-ip-sec">
                        <label htmlFor="confirmpassword">Confirm password:</label>
                        <input type="password" id="confirmpassword"
                        placeholder="Enter password"
                        onChange={(e)=> setConfirmPassword(e.target.value)}>
                        </input>
                    </div>

                    <div>
                    <label/>
                    <button className="update-btn" type="submit">
                        Update Details
                    </button>
                </div>
                    </>
                )
            }
            </form> 
        </div>
    )
}

export default UserProfile
