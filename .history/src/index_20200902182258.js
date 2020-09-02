import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import './fonts/SourceSansPro-Regular.ttf'


const AddEvent = () => (
  <div>
    My event
  </div>
);

const noRoute = () => (
  <div>
    404! <a href="/">Go home</a>
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/create" component={AddEvent} />
      <Route component={noRoute} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);


