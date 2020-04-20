import React from "react";

import { connect } from "react-redux";
import { addSmurf } from "../actions";

import { Container, Typography } from "@material-ui/core";

import SmurfForm from "./SmurfForm";
function AddSmurfForm(props) {
  return (
    <>
      <Typography variant="h3">Add a new smurf:</Typography>
      <Container style={{ width: "50%", marginLeft: "0px" }}>
        <SmurfForm submitForm={props.submitForm} />
      </Container>
    </>
  );
}

export default connect(null, { submitForm: addSmurf })(AddSmurfForm);
