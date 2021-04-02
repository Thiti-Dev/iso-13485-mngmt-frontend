import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/views/landing';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
    </Router>
  );
}

export default App;
