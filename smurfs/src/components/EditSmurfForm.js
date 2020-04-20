import React from "react";
import SmurfForm from "./SmurfForm";

import { Button, Menu, MenuItem, Container } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { connect } from "react-redux";
import { editSmurf, deleteSmurf } from "../actions";

function EditSmurfForm(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openDeleteMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDeleteMenu = () => {
    setAnchorEl(null);
  };

  const deleteSmurf = () => {
    closeDeleteMenu();
    props.deleteSmurf(props.id);
  };

  return (
    <Container style={{ padding: "0px" }}>
      <SmurfForm
        {...props}
        toggleEditing={props.toggleEditing}
        editingExisting={true}
      />
      <Button variant="contained" color="secondary" onClick={openDeleteMenu}>
        {"Delete " + props.name}
      </Button>
      <Menu
        id="delete-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeDeleteMenu}
      >
        <MenuItem onClick={closeDeleteMenu}>
          <ArrowBackIcon />
          Cancel
        </MenuItem>
        <MenuItem color="secondary" onClick={deleteSmurf}>
          <DeleteIcon />
          {"Permanently Delete " + props.name}
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default connect(null, { submitForm: editSmurf, deleteSmurf })(
  EditSmurfForm
);
