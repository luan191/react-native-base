import * as types from './ActionTypes'

export function showMessage(title: string, content: string) {
  return {
    type: types.SHOW_MESSAGE,
    title,
    content
  }
}

export function dismissMessage() {
  return { type: types.DISMISS_MESSAGE }
}

export function interceptorUpdateMessage(title: string, content: string) {
  return {
    type: types.INTERCEPTOR_MESSAGE,
    title,
    content
  }
}
