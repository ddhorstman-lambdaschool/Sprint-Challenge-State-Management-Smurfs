import React from "react";

import {
  Card,
  Typography,
  CardContent,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function SmurfCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteSmurf = () => {
    handleClose();
    props.deleteSmurf(props.id);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{props.name}</Typography>
        <Typography>{"Age: " + props.age}</Typography>
        <Typography>{"Height: " + props.height}</Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ float: "right" }}
          onClick={handleClick}
        >
          <DeleteIcon />
        </Button>
        <Menu
          id="delete-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Cancel</MenuItem>
          <MenuItem color="secondary" onClick={deleteSmurf}>
            {"Delete " + props.name}
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  );
}
