import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile'
import Logout from './components/Logout';
import Protected from './components/Protected';


function App() {
  return (
    <div >
      <Router>
        <Route exact path="/" component={Login}/>
        <Protected exact path="/profile" component={Profile}/>
        <Route exact path="/logout" component={Logout}/>
      </Router>
    </div>
  );
}

export default App;
