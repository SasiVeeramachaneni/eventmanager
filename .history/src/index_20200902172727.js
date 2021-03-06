import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/SourceSansPro-Regular.ttf'


const AddEvent = () => (
  <div>
    My event
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route path="/create" component={AddEvent} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
