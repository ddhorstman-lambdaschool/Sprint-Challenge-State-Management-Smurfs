import React from "react";
import { connect } from "react-redux";

import { Container, Typography } from "@material-ui/core";

import { fetchSmurfs } from "../actions";

import SmurfCard from "./SmurfCard";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <Container>
          <Typography variant="h2">Your village:</Typography>
        {this.props.smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} {...smurf} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ smurf: { smurfs } }) => {
  return { smurfs };
};

const mapDispatchToProps = {
  fetchSmurfs,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);
