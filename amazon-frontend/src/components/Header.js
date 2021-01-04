import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Header.css'
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/USerAction';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

    const dispatch = useDispatch();

    const [dropdown, setDropDown] = useState(false);
    const [secondDropdown, setSecondDropdown] = useState(false);


    const showDropDown = () =>{
        if(dropdown) setDropDown(false);
        else setDropDown(true);
    }

    const showSecondDropDown = () =>{
        if(secondDropdown) setSecondDropdown(false);
        else setSecondDropdown(true);
    }


    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signOutHandler = () =>{
        dispatch(signout());
    }


    const [query, setQuery] = useState('');

    const searchProduct = () =>{
        //To-DO
    }


    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Amazon Clone</Link>
                    </div>

                    <div className="search-bar">
                        <input className="search-input"
                        onChange={(e)=> setQuery(e.target.value)}
                        placeholder="Search products"></input>
                        <button className="search-btn"
                        onClick={searchProduct}
                        ><SearchIcon/></button>
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
                                        
                                        <p onClick={showDropDown}>
                                            {userInfo.name}
                                            <ArrowDropDownIcon/>
                                        </p>

                                        <ul className={ dropdown? 'dropdown-content show' : 'dropdown-content'}>
                                            <li>
                                               <Link to="/profile">Account</Link> 
                                            </li>
                                            <li>
                                               <Link to="/orderhistory">Order History</Link> 
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

                        <li>
                            {userInfo && userInfo.isAdmin && (
                                <div className="header-dropdown">
                                    <p onClick={showSecondDropDown}>
                                        Admin 
                                        <ArrowDropDownIcon/>
                                    </p>

                                    <ul className={ secondDropdown? 'dropdown-content show' : 'dropdown-content'}>
                                        <li>
                                           <Link to="/dashboard">Dashboard</Link> 
                                        </li>
                                        <li>
                                           <Link to="/productlist">Products</Link> 
                                        </li>
                                        <li>
                                           <Link to="/orderlist">Orders</Link> 
                                        </li>
                                        <li>
                                           <Link to="/userlist" onClick={signOutHandler}>Users</Link> 
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                            
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
