import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/views/login';
import Feedback from './components/deliberation/views/feedback';
import Sales from './components/deliberation/views/sales';
import Landing from './components/landing/views';
import Dashboard from './components/dashboard/views';
import maintenance from './components/manufacturing/maintenance';
import Feedbacksurvey from './components/Feedbacksurvey';



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/sales" component={Sales}/>
          <Route exact path="/feedback" component={Feedback}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/maintenance" component={maintenance}/>
          <Route exact path="/feedbacksurvey" component={Feedbacksurvey}/>
        </Switch>
    </Router>
  );
}

export default App;
