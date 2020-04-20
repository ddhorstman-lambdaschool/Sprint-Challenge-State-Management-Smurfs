import { combineReducers } from "redux";

import { ACTIONS } from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
};

function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload.smurfs,
      };
    case ACTIONS.TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}

export default combineReducers({ smurf: smurfReducer });
