import React from "react";
import SmurfForm from "./SmurfForm";

import { Button, Menu, MenuItem, Container } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import { editSmurf } from "../actions";

function EditSmurfForm(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openDeleteMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeDeletMenu = () => {
    setAnchorEl(null);
  };

  const deleteSmurf = () => {
    closeDeletMenu();
    props.deleteSmurf(props.id);
  };

  return (
    <Container style={{padding:"0px"}}>
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
        onClose={closeDeletMenu}
      >
        <MenuItem onClick={closeDeletMenu}>Cancel</MenuItem>
        <MenuItem color="secondary" onClick={deleteSmurf}>
        {"Permanently Delete " + props.name}
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default connect(null, { submitForm: editSmurf })(EditSmurfForm);
