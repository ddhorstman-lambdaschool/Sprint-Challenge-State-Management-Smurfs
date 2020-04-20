import React from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

import SmurfCard from "./SmurfCard";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <>
        {this.props.smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} {...smurf} />
        ))}
      </>
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
