import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Header.css'
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/USerAction';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {

    const dispatch = useDispatch();

    const [dropdown, setDropDown] = useState(false)


    const showDropDown = () =>{
        if(dropdown) {
            setDropDown(false);
        }
        else{
            setDropDown(true);
        }
    }


    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signOutHandler = () =>{
        dispatch(signout());
    }


    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Amazon Clone</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/cart"><ShoppingCartIcon/>
                                {
                                    cartItems.length > 0 && 
                                    (<p className="badge">{cartItems.length}</p>)
                                }
                            </Link>
                        </li>
                        <li>
                            {
                                userInfo ? (
                                    <div className="header-dropdown">
                                        
                                        <p to="#" onClick={showDropDown}>
                                            {userInfo.name}
                                            <ArrowDropDownIcon/>
                                        </p>

                                        <ul className={ dropdown? 'dropdown-content show' : 'dropdown-content'}>
                                            <li>
                                               <Link to="/profile" onClick={signOutHandler}>Account</Link> 
                                            </li>
                                            <li>
                                               <Link to="/" onClick={signOutHandler}>Sign out</Link> 
                                            </li>
                                        </ul>
                                    </div>
                                    
                                ) :
                                (
                                    <Link to="/signin"><AccountCircleIcon/></Link>
                                )
                            }
                        </li>
                            
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
