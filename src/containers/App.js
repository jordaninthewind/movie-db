import React, { Component } from 'react';
import MainPage from './MainPage';
import Item from '../components/Item'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Main Component</Link>
                        </li>
                        <br />
                        <li>
                            <Link to="/item">Item</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/item" component={Item} />
                </div>
            </Router>
        )
    }
}

export default App;