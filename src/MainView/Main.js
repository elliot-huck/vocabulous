// This module renders the main view of the page after a user has logged in

import React, { Component } from "react"
import TitleCard from "../LoginView/TitleCard";

export default class Login extends Component {
  render() {
    return (
      <article>
        <h1>Welcome to...</h1>
        <TitleCard />
      </article>
    )
  }
}