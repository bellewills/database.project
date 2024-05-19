import React from 'react'; 
import Navbar from './components/Navbar.js'; // Ensure this path is correct
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
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
