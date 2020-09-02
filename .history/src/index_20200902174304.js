import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import './fonts/SourceSansPro-Regular.ttf'


const AddEvent = () => (
  <div>
    My event
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact={true}/>
      <Route path="/create" component={AddEvent} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);


