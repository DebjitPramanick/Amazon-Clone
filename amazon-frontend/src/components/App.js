import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart';

const App = () => {


    return (
        <>

        <Router>
            <Header/>

            <Switch>
                <Route exact path="/cart/:id?" component={Cart}></Route>
                <Route exact path="/sign-in">{/** */}</Route>
                <Route path="/product/:id" component={ProductPage}></Route>
                <Route path="/" component={Home} exact></Route>
            </Switch>
            
            
            

        </Router>

        </>
        
    )
}

export default App
