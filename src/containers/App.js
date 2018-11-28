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

    slugifyQuery(queryPhrase) {
        return queryPhrase.split(" ").join("%20");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=538bc79feec5b4a97260aafb12ea1f74&language=en-US&query=${this.slugifyQuery(this.state.textInput)}&include_adult=false`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    movies: json.results,
                })
            })
    }

    render() {
        return (
            <Router>
                <>
                <NavBar />
                <AppRouter
                    text={this.state.textInput}
                    movies={this.state.movies}
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