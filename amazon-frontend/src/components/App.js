import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import ProductPage from './ProductPage'

const App = () => {
    return (
        <>

        <Router>
            <Header/>

            <Switch>
                <Route exact path="/cart">{/** */}</Route>
                <Route exact path="/sign-in">{/** */}</Route>
            </Switch>
            
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/product/:id" component={ProductPage}></Route>

        </Router>

        </>
        
    )
}

export default App
