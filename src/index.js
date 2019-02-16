import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewItem from './components/NewItem';
import Comments from './components/Comments';


ReactDOM.render(



  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/NewItem" component={NewItem} />
      <Route path="/Comments" component={Comments} />
    </Switch>
  </Router>,


  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
