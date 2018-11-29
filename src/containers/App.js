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

    slugifyQuery() {
        return this.state.textInput.split(" ").join("%20");
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${process.env.BASE_URL}?api_key=${process.env.API_KEY}&language=en-US&query=${this.slugifyQuery()}&include_adult=false`)
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