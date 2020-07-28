import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  return (
    <div >
      <Router>
        <Route path="/">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
