import React, { Fragment } from 'react';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';
import Header from './Components/HeaderComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
