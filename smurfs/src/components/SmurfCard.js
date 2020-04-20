import React from "react";

import { Card, Typography, CardContent } from "@material-ui/core";

export default function SmurfCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{props.name}</Typography>
        <Typography>{"Age: " + props.age}</Typography>
        <Typography>{"Height: " + props.height}</Typography>
      </CardContent>
    </Card>
  );
}
