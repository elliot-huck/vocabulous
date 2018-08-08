// This module renders the main view of the page after a user has logged in

import React, { Component } from "react"
import { Route } from "react-router-dom"
import HeaderBar from "./HeaderBar"
import Browse from "../BrowseView/Browse";
import List from "../ListView/List";
import Quiz from "../QuizView/Quiz";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>

        <HeaderBar isFullWidth />

        <Route path="/browse"
          render={() => { return <Browse /> }} />
        <Route path="/list"
          render={() => { return <List /> }} />
        <Route path="/quiz"
          render={() => { return <Quiz /> }} />

        {/* <Route path="/callback" render={(props) => {
          handleAuthentication(props)
          return <MainView />
        }} /> */}

      </React.Fragment>
    )
  }
}