/**
 * Record each team's standing
 */

'use strict'

import { GAME } from '../constant'

const initialState = {
  loaded: false,
  data: {
    // teamId: {
    //   abbr: {String}
    //   state: {Object}
    // }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME.STANDING:
      return {
        loaded: true,
        data: action.data
      };
    default:
      return state;
  }
}
