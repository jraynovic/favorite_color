import * as ActionTypes from './ActionTypes';

export const history = (
    state = { history:[]},
    action
  ) => {
   
    switch (action.type) {

      case ActionTypes.SET_HISTORY:
        return {...state, history:action.payload }
          
      default:
        return state;
    }
  };