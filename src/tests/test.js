import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../store'
import { App } from '../containers/App'
import { SearchPage } from '../containers/SearchPage/SearchPage'
import MovieInfo from '../components/MovieInfo/MovieInfo'
import Footer from '../components/Footer/Footer'
import * as actions from '../actions/actions'

// Actions & Async Action Creators - test return values are correct

describe('Action Creators', () => {
  it('returns an object', () => {
    expect(actions.removeCurrentMovieFromState()).toEqual({
      selectedMovie: {},
      type: 'CURRENT_SELECTED_MOVIE'
    })
  })

  it('should create an action with id', () => {
    const id = 12
    const action = {
      type: 'SELECTED_MOVIE_ID',
      selectedMovieId: id
    }

    expect(actions.handleMovieSelect(id)).toEqual(action)
  })
})

// Components

describe('Components Render', () => {
  test('It renders footer text', () => {
    const footer = shallow(<Footer />)

    expect(footer.text()).toEqual('netflixroulette')
  })

  test('movieinfo title text and date', () => {
    const date = new Date()
    const name = 'Paul'
    const movieinfo = shallow(<MovieInfo title={name} releaseDate={date} />)

    expect(movieinfo.text()).toContain(name, date.getFullYear())
  })

  it('renders without crashing', () => {
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
})

// Forms - input

describe('Input Forms', () => {
  it('has an input that sets prop as value', () => {
    const match = { params: { name: 'paul' } }
    const searchPage = mount(
      <SearchPage
        match={match}
        setSearchTerm={() => {}}
        setLoading={() => {}}
        getMovies={() => {}}
      />
    )

    expect(searchPage.find('input')).toBeTruthy()
    expect(searchPage.find('input').instance().value).toEqual('paul')
  })
})
