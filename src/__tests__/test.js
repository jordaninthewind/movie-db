/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import store from '../store'
import App from '../containers/App'
import Footer from '../components/Footer/Footer'
import { removeCurrentMovieFromState } from '../actions/actions'

describe('Actions', () => {
  it('returns an object', () => {
    expect(removeCurrentMovieFromState()).toEqual({
      selectedMovie: {},
      type: 'CURRENT_SELECTED_MOVIE'
    })
  })
})

test('it renders shallow', () => {
  const footer = shallow(<Footer />)
  expect(footer.text()).toEqual('netflixroulette')
})

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
