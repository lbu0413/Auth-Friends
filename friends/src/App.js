import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/LoginPage'>Login Page</Link>
        </li>
        <li>
          <Link to='/FriendsList'>Friends Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/FriendsList" component={FriendsList} />
        <Route path="/LoginPage" component={LoginPage} />
        {/* <Route path="/FriendsList" component={FriendsList} /> */}
      </Switch>
   
    </div>
  </Router>
  );
}

export default App;
