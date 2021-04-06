import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/views/login';
import Sales from './components/deliberation/views/sales';
import Landing from './components/landing/views';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/sales" component={Sales}/>
        </Switch>
    </Router>
  );
}

export default App;
