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
            
            <Route path="/" component={Home}></Route>
            <Route path="/prodct/:id" component={ProductPage}></Route>

        </Router>


        

        </>
        
    )
}

export default App
