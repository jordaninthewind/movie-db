import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import store from '../store'
import App from '../containers/App'
import Footer from '../components/Footer/Footer'
import { removeCurrentMovieFromState } from '../actions/actions'

describe('Reducer Actions', () => {
  it('returns an object', () => {
    expect(removeCurrentMovieFromState()).toEqual({
      selectedMovie: {},
      type: 'CURRENT_SELECTED_MOVIE'
    })
  })
})

describe('API Handling', () => {})

describe('Component Rendering', () => {
  test('it renders shallow', () => {
    const footer = shallow(<Footer />)
    expect(footer.text()).toEqual('netflixroulette')
  })

  test('renders without crashing', () => {
    const app = shallow(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )

    expect.anything()
  })
})
