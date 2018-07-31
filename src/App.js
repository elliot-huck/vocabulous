import React, { Component } from 'react';
import "bulma/css/bulma.css"
import './App.css';
import LoginView from './LoginView/Login';
import MainView from './MainView/Main'

class App extends Component {
  state = {
    isLoggedIn: false
  }

  // Puts the user's id in session storage
  logIn = (userId) => {
    sessionStorage.setItem("activeUserId", userId)
    this.setState({isLoggedIn: true});
  }

  render() {
      if (sessionStorage.getItem("activeUserId")) {
        return <MainView />
      } else {
        return <LoginView logIn={this.logIn}/>
      }
  }
}

export default App;
