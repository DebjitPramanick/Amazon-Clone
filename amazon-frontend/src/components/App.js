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
                <Route path="/products/product/:id" component={ProductPage}></Route>
                <Route path="/" component={Home} exact></Route>
            </Switch>
            
            
            

        </Router>

        </>
        
    )
}

export default App
