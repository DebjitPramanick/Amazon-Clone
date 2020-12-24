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

                <Route exact path="/watched">
                    {/** */}
                </Route>

                <Route exact path="/add">
                    {/** */}
                </Route>
            </Switch>
        </Router>


        <ProductList/>

        </>
        
    )
}

export default App
