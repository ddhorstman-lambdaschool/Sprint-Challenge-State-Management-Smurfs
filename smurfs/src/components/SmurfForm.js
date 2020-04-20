import React from "react";
import { TextField, Button, ButtonGroup } from "@material-ui/core";

const initialState = {
  name: "",
  age: "",
  height: "",
  editingExisting: false,
  id: null,
};

export default class SmurfForm extends React.Component {
  state = initialState;

  componentDidMount() {
    if (this.props.editingExisting) {
      for (const item in this.props) {
        this.setState({ [item]: this.props[item] });
      }
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleReset = (e) => {
    e && e.preventDefault();
    if (this.state.editingExisting) this.props.toggleEditing();
    else
      for (const item in initialState) {
        this.setState({ [item]: initialState[item] });
      }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.state.editingExisting
      ? this.props.toggleEditing()
      : this.handleReset();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
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
            {this.props.editingExisting ? "Cancel" : "Reset"}
          </Button>
        </ButtonGroup>
      </form>
    );
  }
}