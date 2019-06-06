import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Band from './pages/band/Band';
import Label from './pages/label/Label';
import NotFound from './pages/shared/NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/band">Band</Link></li>
        <li><Link to="/label">Label</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/band" component={Band} />
        <Route path="/label" component={Label} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
