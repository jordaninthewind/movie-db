import React, { Component } from 'react';
import MainPage from './MainPage';
import Item from '../components/Item';
import Lost from '../components/Lost';
import SearchPage from "./SearchPage";
import { Route, Switch } from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/item" component={Item} />
                <Route component={Lost} />
            </Switch>
        )
    }
}

export default AppRouter;