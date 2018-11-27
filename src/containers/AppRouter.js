import React, { Component } from 'react';
import SearchPage from './SearchPage';
import ShowPage from './ShowPage';
import Lost from '../components/Lost';
import { Route, Switch } from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route 
                    exact path="/" 
                    render={ props => <SearchPage 
                                        text={this.props.text}
                                        handleInput={this.props.handleInput}
                                        /> 
                            } 
                  />
                <Route exact path="/search/:query" component={SearchPage} />
                <Route exact path="/film/:title" component={ShowPage} />
                <Route component={Lost} />
            </Switch>
        )
    }
}

export default AppRouter;