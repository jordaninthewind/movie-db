/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })

describe('Test setup file', () => {
  test('It sets up for other test files', () => {
    expect('adapter').toBe('adapter')
  })
})
