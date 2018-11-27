import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <NavBar />
                    <AppRouter />
                    <Footer />
                </>
            </Router>
        )
    }
}

export default App;