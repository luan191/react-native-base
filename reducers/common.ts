import * as types from 'actions/ActionTypes'

export interface commonState {
  title: string
  content: string
  showMessageDialog: boolean
  isConnected: boolean
  tokenExpired: boolean
}

const defaultState: commonState = {
  title: '',
  content: '',
  showMessageDialog: false,
  isConnected: true,
  tokenExpired: false
}

export const common = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return {
        ...state,
        showMessageDialog: true,
        title: action.title,
        content: action.content
      }

    case types.DISMISS_MESSAGE:
      return { ...state, showMessageDialog: false }

    case types.CONNECTION_CHANGE:
      return { ...state, isConnected: action.isConnected }

    default:
      return state
  }
}

export default common
