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
export const addSmurf = ({ name, height, age }) => (dispatch) => {
  dispatch({ type: ACTIONS.TOGGLE_FORM_SUBMISSION_LOADING });

  axios
    .post("http://localhost:3333/smurfs", {
      name,
      age,
      height,
    })
    .then((r) => {
      dispatch({ type: ACTIONS.FETCH_SMURFS, payload: { smurfs: r.data } });
    })
    .then(() => dispatch({ type: ACTIONS.TOGGLE_FORM_SUBMISSION_LOADING }));
};

export const deleteSmurf = (id) => (dispatch) => {
  axios.delete(`http://localhost:3333/smurfs/${id}`).then((r) => {
    dispatch({ type: ACTIONS.FETCH_SMURFS, payload: { smurfs: r.data } });
  });
};

export const editSmurf = ({ name, age, height, id }) => (dispatch) => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
    .then((r) => {
      dispatch({ type: ACTIONS.FETCH_SMURFS, payload: { smurfs: r.data } });
    });
};
