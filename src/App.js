import React, { Component } from 'react';
import "bulma/css/bulma.css"
import './App.css';
import LoginView from './LoginView/Login';
import MainView from './MainView/Main'
import Auth from "./Auth/Auth"
import { Route } from "react-router-dom"
import history from "./history"

const auth = new Auth()

class App extends Component {
  state = {
    isLoggedIn: false
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  // Puts the user's id in session storage
  // logIn = (userId) => {
  //   sessionStorage.setItem("activeUserId", userId)
  //   this.setState({ isLoggedIn: true });
  // }



  render() {


    const handleAuthentication = ({location}) => {
      if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
      }
    }



    return (
      <React.Fragment>

        <LoginView auth={auth} logIn={this.logIn} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props)
          return <MainView />
        }} />
      </React.Fragment>
    )



    //   if (sessionStorage.getItem("activeUserId")) {
    //   return <MainView />
    // } else {
    //   return
    // }
  }
}

export default App;
