import React from 'react';
import SearchPage from './SearchPage';
import ShowPage from './ShowPage';
import Lost from '../components/Lost';
import { Route, Switch, Redirect } from 'react-router-dom';

const AppRouter = props => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/search' /> } /> {/*To redirect when hits root*/}
            <Route exact path='/search/:name?' component={SearchPage} />
            <Route exact path='/film/:title' component={ShowPage} />
            <Route component={Lost} />
        </Switch>
    )
}

export default AppRouter;