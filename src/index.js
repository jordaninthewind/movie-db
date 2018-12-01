import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import 'normalize.css';

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('root')
)
