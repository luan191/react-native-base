import { combineReducers } from 'redux'
import * as types from 'actions/ActionTypes'
import common from './common'

export const appReducer = combineReducers({
  common
})

const rootReducer = (state: any, action: any) => {
  if (action.type === types.TOKEN_EXPIRED) {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
