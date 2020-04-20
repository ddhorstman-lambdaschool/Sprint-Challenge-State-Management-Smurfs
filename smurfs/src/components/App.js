import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";
import { Typography, Container } from "@material-ui/core";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Typography variant="h1">Smurfs!</Typography>
          <SmurfList />
          <AddSmurfForm />
        </Container>
      </Provider>
    );
  }
}

export default App;
