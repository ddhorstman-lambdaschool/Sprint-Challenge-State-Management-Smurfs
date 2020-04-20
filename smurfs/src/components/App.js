import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

import SmurfList from "./SmurfList";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SmurfList />
        </div>
      </Provider>
    );
  }
}

export default App;
