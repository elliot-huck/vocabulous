import React, { Component } from "react"
import TitleCard from "./TitleCard";
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <article>
        <TitleCard />
        <LoginForm />
      </article>
    )
  }
}