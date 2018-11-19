import React, { Component } from 'react';
import MainPage from './MainPage';
import Item from '../components/Item'
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Main Component</Link></li>
                        <br />
                        <li><Link to="/search">Search Page</Link></li>
                        <br />
                        <li><Link to="/item">Item Component</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/item" component={Item} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;