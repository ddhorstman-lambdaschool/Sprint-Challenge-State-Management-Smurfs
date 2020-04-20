import axios from "axios";

export const ACTIONS = {
  TOGGLE_LOADING: "TOGGLE_LOADING",
  TOGGLE_FORM_SUBMISSION_LOADING: "TOGGLE_FORM_SUBMISSION_LOADING",
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
export const addSmurf = ({name, height, age}) => (dispatch) => {
    dispatch({type:ACTIONS.TOGGLE_FORM_SUBMISSION_LOADING});

    axios.post("http://localhost:3333/smurfs", {
        name,
        age,
        height,
        id: Date.now()
    })
    .then(() => dispatch({type: ACTIONS.TOGGLE_FORM_SUBMISSION_LOADING}))
    .then(() => fetchSmurfs());
}
