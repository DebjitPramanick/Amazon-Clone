import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from './ProductList';

const App = () => {
    return (
        <>

        <Router>
            <Header/>

            <Switch>
                <Route exact path="/">
                    {/** */}
                </Route>

                <Route exact path="/cart">
                    {/** */}
                </Route>

                <Route exact path="/sign-in">
                    {/** */}
                </Route>
            </Switch>
        </Router>


        <ProductList/>

        </>
        
    )
}

export default App
