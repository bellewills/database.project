import React from 'react'; 
import Navbar from '../components/Navbar';
import {BrowseRouter as Route, Switch, Route } from 'react-router-DOM';

import './App.css';


function App () {
    return (
        <> 
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact />
            </Switch>

            </Router>
        </>
    );
}

export default App;  