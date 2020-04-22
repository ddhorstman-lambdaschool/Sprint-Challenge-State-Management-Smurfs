import React from "react";

import SmurfInfo from "./SmurfInfo";
import EditSmurfForm from "./EditSmurfForm";

import { Card, CardContent, Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

export default function SmurfCard(props) {
  const [editing, setEditing] = React.useState(false);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  return (
    <Card style={{ minWidth: "25%", margin: "1%" }}>
      <CardContent>
        {editing ? (
          <EditSmurfForm {...props} toggleEditing={toggleEditing} />
        ) : (
          <>
            <Fab size="small" style={{ float: "right" }}>
              <EditIcon onClick={toggleEditing} />
            </Fab>
            <SmurfInfo {...props} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
