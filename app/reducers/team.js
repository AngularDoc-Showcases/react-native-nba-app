/**
 * Team rank
 */

'use strict'

import { TEAM } from '../constant'

const initialState = {
  loaded: false,
  data: {
    eastern: [
      // {id, abbre, standing}
    ],
    western: []
  },
  detail: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TEAM.RANK:
      return {
        loaded: true,
        data: action.data
      };
    case TEAM.INFO: {
      let detail = state.detail
      detail[action.id] = action.data
      return {
        detail
      }
    };
    case TEAM.DETAIL: {
      let detail = state.detail
      detail[action.id] = detail[action.id] || {}
      detail[action.id].players = action.data
      return {
        detail
      }
    };
    default: return state;
  }
}
