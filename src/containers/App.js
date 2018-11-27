import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from '../components/Footer';
import SearchResults from './SearchResults';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <AppRouter />
                    <SearchResults />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;