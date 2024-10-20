// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import AdminPage from './Admin';
import AnalystPage from './Analyst';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/analyst" component={Analyst} />
        <Route path="/homepage" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
