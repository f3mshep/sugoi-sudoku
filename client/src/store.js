import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-route-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store