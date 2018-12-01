import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import SearchResults from './SearchResults';
import SearchPage from './SearchPage';
import ShowPage from './ShowPage';
import Lost from '../components/Lost';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
    return (
        <>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/search' /> } />
            <Route path='/search/:name?' component={SearchPage} />
            <Route path='/film/:title' component={ShowPage} />
            <Route component={Lost} />
        </Switch>
        <Route path='/search/:name' component={SearchResults} />
        <Footer />
        </>
    )
}

export default App;