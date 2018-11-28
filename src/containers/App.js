import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();

        this.state = {
            textInput: '',
            movies: []
        }
    }

    handleInput = (e) => {
        this.setState({
            textInput: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.textInput);
    }

    render() {
        return (
            <Router>
                <>
                <NavBar />
                <AppRouter
                    text={this.state.textInput}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    />
                <Footer />
                </>
            </Router>
        )
    }
}

export default App;