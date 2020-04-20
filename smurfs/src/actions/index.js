import axios from "axios";

export const ACTIONS = {
  TOGGLE_LOADING: "TOGGLE_LOADING",
  FETCH_SMURFS: "FETCH_SMURFS",
};
export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: ACTIONS.TOGGLE_LOADING });

  axios
    .get("http://localhost:3333/smurfs")
    .then((r) => {
      dispatch({ type: ACTIONS.FETCH_SMURFS, payload: { smurfs: r.data } });
    })
    .then(dispatch({ type: ACTIONS.TOGGLE_LOADING }));
};
