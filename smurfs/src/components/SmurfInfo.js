import React from "react";

import Typography from "@material-ui/core/Typography";

export default function SmurfInfo(props) {
  return (
    <>
      <Typography variant="h4">{props.name}</Typography>
      <Typography>{"Age: " + props.age}</Typography>
      <Typography>{"Height: " + props.height}</Typography>
    </>
  );
}
