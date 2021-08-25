import { createStore } from 'redux'
import reducers from '../reducers'

function configureStore() {
  return createStore(reducers)
}

const store = configureStore()

export default store
