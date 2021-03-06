import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import SearchResults from './SearchResults/SearchResults'
import SearchPage from './SearchPage/SearchPage'
import ShowPage from './ShowPage/ShowPage'
import Footer from '../components/Footer/Footer'
import Lost from '../components/Lost'

export const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route path="/search/:name?" component={SearchPage} />
        <Route path="/film/:id" component={ShowPage} />
        <Route component={Lost} />
      </Switch>
      <Route path="/(search|film)/:query?/" component={SearchResults} />
      <Footer />
    </>
  )
}

export default App
