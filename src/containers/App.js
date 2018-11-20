import React, { Component } from 'react';
import MainPage from './MainPage';
import NavBar from './NavBar';
import Footer from '../components/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <AppRouter />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;