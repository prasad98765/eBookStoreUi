import React, { Component } from "react";
// import TextField from '../src/component/textField/textfield';
// import TopBar from './component/topbar/navbar'
// import Dashboard from "./component/dashboard/dashboard";

import Routes from "../src/component/routes"
// import Snackbar from './component/snackbar/snackbar'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <ListOfBook /> */}
          <Routes></Routes>
          {/* <Snackbar/> */}
        </div>
       
      </div>
    );
  }
}

export default App;
