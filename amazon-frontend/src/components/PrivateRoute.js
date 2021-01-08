import React from 'react'
import { Route, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;

    return (
        <div>
            <Route 
            {...rest}
            render={(props) =>
                userInfo? (
                    <Component {...props}></Component>
                ) : 
                (
                    <Redirect to="/signin"/>
                )}>

            </Route>
        </div>
    )
}

export default PrivateRoute
