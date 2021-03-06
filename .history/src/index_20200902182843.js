import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './index.css';
import Header from './Header';
import App from './App';
import './fonts/SourceSansPro-Regular.ttf'


const AddEvent = () => (
  <div>
    My event
  </div>
);

const noRoute = () => (
  <div>
    404!-<Link to="/">Go home</Link>
  </div>
);

const routes = (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/create" component={AddEvent} />
      <Route component={noRoute} />
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);


