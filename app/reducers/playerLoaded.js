'use strict'

import { PLAYER } from '../constant'

const initialState = {
  // id: {isLogLoaded, log, ...}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYER.DETAIL: {
      const data = state[action.id] ? Object.assign(state[action.id], action.data) : action.data
      return {
        [action.id]: data
      }
    };

    case PLAYER.LOG: {
      const actionData = {
        log: action.data
      }
      const data = state[action.id] ? Object.assign(state[action.id], actionData) : actionData
      return {
        [action.id]: data
      }
    }

    default:
      return state;
  }
}
