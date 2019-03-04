'use strict'

import { PLAYER } from '../constant'

const initialState = {
  isLoaded: false,
  recent: [],
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYER.LIST:
      return {
        isLoaded: true,
        data: action.data
      };

    case PLAYER.RECENT:
      return {
        recent: action.data
      };

    default:
      return state;
  }
}
