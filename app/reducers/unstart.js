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
        },
        visitor: {
          team: {String}
        },
        time: 'String'
      }
    */
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME.INFO:
      return Object.assign({}, state, {
        gameDate: action.data.gameDate,
        data: action.data.unstart
      });
    default:
      return state;
  }
}
