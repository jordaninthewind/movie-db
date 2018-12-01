import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import AppRouter from './AppRouter';
import SearchResults from './SearchResults';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <>
        <AppRouter />
        <Route path='/search/:name' component={SearchResults} />
        <Footer />
        </>
    )
}

export default App;