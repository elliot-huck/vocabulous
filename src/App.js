import React, { Component } from 'react';
import "bulma/css/bulma.css"
import './App.css';
import Login from './LoginView/Login';

class App extends Component {
  state = {
    isLoggedIn: false
  }

  logIn = (userId) => {
    sessionStorage.setItem("activeUserId", userId)
    this.setState({isLoggedIn: true});
    console.log("Successful log in");
  }

  render() {
    return (
      <Login logIn={this.logIn}/>
    );
  }
}

export default App;
