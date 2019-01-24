import React from 'react'
import Login from '../../containers/Login'
import Friend from '../../containers/Friend'
import Thread from '../../containers/Thread'
import ChatComponent from '../../containers/Chat'
import { AuthenticatedRoute } from './AuthenticatedRoute'
import { Router, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const App = () => (
  <div className="container-fluid">
    <Router history={history}>
      <div>
        <Route path="/login" component={Login} />
        <AuthenticatedRoute exact path="/" component={Thread} />
        <AuthenticatedRoute path="/friend" component={Friend} />
        <AuthenticatedRoute path="/message/:userId" component={ChatComponent} />
      </div>
    </Router>
  </div>
)

export default App
