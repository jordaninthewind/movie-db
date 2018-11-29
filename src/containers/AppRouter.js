import React from 'react';
import SearchPage from './SearchPage';
import ShowPage from './ShowPage';
import Lost from '../components/Lost';
import { Route, Switch } from 'react-router-dom';

const AppRouter = props => {
    return (
        <Switch>
            <Route 
                exact path='/'
                render={ () => <SearchPage
                                    text={props.text}
                                    movies={props.movies}
                                    handleInput={props.handleInput}
                                    handleSubmit={props.handleSubmit}
                                  /> 
                        } 
                />
            <Route 
                exact path='/search/:query' 
                render={ () => <SearchPage
                                    text={props.text}
                                    movies={props.movies}
                                    handleInput={props.handleInput}
                                    handleSubmit={props.handleSubmit}
                                  />
                        }
                />
            <Route exact path='/film/:title' component={ShowPage} />
            <Route component={Lost} />
        </Switch>
    )
}

export default AppRouter;