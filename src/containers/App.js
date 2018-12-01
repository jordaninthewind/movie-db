import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import AppRouter from './AppRouter';
import SearchResults from '../components/SearchResults';

const App = () => {
    return (
            <>
            <AppRouter />
            <SearchResults />
            <Footer />
            </>
    )
}

export default App;