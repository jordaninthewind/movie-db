import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Enzyme from 'enzyme'
import store from './store'
import App from './containers/App'
import { sum, removeCurrentMovieFromState } from './actions/actions'


test('adds 1 + 2 to equal 3', () => {
  expect(sum(5,5)).toBeGreaterThan((9))
})

it('returns an object', () => {
  expect(removeCurrentMovieFromState()).toEqual({"selectedMovie": {}, "type": "CURRENT_SELECTED_MOVIE"})
})

// eslint-disable-next-line no-undef
test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

