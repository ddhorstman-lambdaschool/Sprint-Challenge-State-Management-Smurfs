import React from "react";
import {
  TextField,
  Container,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import { connect } from "react-redux";
import { addSmurf } from "../actions";

const initialState = {
    name: "",
    age: "",
    height: "",
  };

class AddSmurfForm extends React.Component {
  state = initialState;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleReset = (e) => {
    e && e.preventDefault();
    for (const item in initialState) {
      this.setState({ [item]: initialState[item] });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.handleReset();
  };

  render() {
    return (
      <Container>
        <Typography variant="h3">Add a new smurf:</Typography>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column", width: "50%" }}
        >
          <TextField
            required
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            required
            label="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <TextField
            required
            label="Height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <ButtonGroup>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button variant="contained" type="reset" onClick={this.handleReset}>
              Reset
            </Button>
          </ButtonGroup>
        </form>
      </Container>
    );
  }
}
export default connect(null, { addSmurf })(AddSmurfForm);
