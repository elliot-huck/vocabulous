// This module renders the main view of the page after a user has logged in

import React, { Component } from "react"
import TitleCard from "../LoginView/TitleCard";
import HeaderBar from "./HeaderBar"

export default class Main extends Component {
  render() {
    return (
        <HeaderBar isFullWidth />
    )
  }
}