// Lib Imports
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// Reducers
import test from './test'

export default history =>
  combineReducers({
    test,
    router: connectRouter(history),
  })
