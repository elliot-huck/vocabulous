// This module renders the login view of the page

import React, { Component } from "react"
import TitleCard from "./TitleCard";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <article>
        <TitleCard />
        <LoginForm logMeIn={this.props.logIn} />
      </article>
    )
  }
}