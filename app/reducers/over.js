'use strict'

import { GAME } from '../constant'

const initialState = {
  data: [
    /*
      {
        id: {Number}
        type: {String}
        home: {
          team: {String}
          score: {String}
        },
        visitor: {
          team: {String}
          score: {String}
        },
        detail: {
          url: {String}
          loaded: {Bool}
          data: {Object}
        }
      }
    */
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME.INFO:
      return Object.assign({}, state, {
        gameDate: action.data.gameDate,
        data: action.data.over
      });

    case GAME.DETAIL: {
      if (action.gameType !== 'over') return state
      let newState = Object.assign([], state)
      state.data.some(game => {
        if (game.id === action.gameId) {
          game.detail = game.detail || {}
          game.detail.loaded = true
          game.detail.data = action.data
          return true
        }
        return false
      })

      return newState
    };

    default:
      return state;
  }
}
