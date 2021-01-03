import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { detailsUser } from '../actions/USerAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const UserProfile = () => {
    
    const userSignin = useSelector((state) => state.userSignin);
    const userDetails = useSelector((state) => state.userDetails);
    const {userInfo} = userSignin;
    const {loading,error,user} = userDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);


    const updateDetails = (e) =>{
        e.preventDefault();
    }

    return (
        <div>
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
                    <div className="form-ip-sec">
                        <label htmlFor="name">Name:</label>
                        <input type="name" id="name"
                        placeholder="Enter name"
                        value={user.name}>
                        </input>
                    </div>

                    <div className="form-ip-sec">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email"
                        placeholder="Enter email"
                        value={user.email}>
                        </input>
                    </div>

                    <div className="form-ip-sec">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"
                        placeholder="Enter password"
                        value={user.password}>
                        </input>
                    </div>

                    <div className="form-ip-sec">
                        <label htmlFor="confirmpassword">Confirm password:</label>
                        <input type="password" id="confirmpassword"
                        placeholder="Enter password">
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
