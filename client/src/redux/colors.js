import * as ActionTypes from './ActionTypes';

export const colors = (
    state = { allColors:[], favoriteColor:{}},
    action
  ) => {
   
    switch (action.type) {

      case ActionTypes.SET_ALL_COLORS:
        return {...state, allColors:action.payload }

      case ActionTypes.SET_FAVORITE_COLOR:
          return {...state, favoriteColor:action.payload}
          
      default:
        return state;
    }
  };