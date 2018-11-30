import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();

        this.state = {
            textInput: '',
            movies: [],
            meta: {},
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
        fetch(`${process.env.BASE_URL}?api_key=${process.env.API_KEY}&language=en-US&query=${this.slugifyQuery(this.state.textInput)}&include_adult=false`)
          .then(res => res.json())
        //   .then(json => console.log(json))
          .then(json => {
            this.setState({
              movies: json.results,
              meta: {
                  total_results: json.total_results,
                  total_pages: json.total_pages,
                  current_page: json.current_page
              }
            })
        })
    }

    render() {
        return (
            <Router>
                <>
                <AppRouter
                    text={this.state.textInput}
                    movies={this.state.movies}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    meta={this.state.meta}
                  />
                <Footer />
                </>
            </Router>
        )
    }
}

export default App;