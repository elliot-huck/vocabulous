// This module renders the header bar that appears at the top of every page

import React, { Component } from "react"
import { Hero, HeroBody, HeroFooter, Container } from "bloomer"
import { Tabs, TabList, Tab, TabLink, Title } from "bloomer"

import TitleCard from "../LoginView/TitleCard"
import NavBar from "./NavBar"

export default class HeaderBar extends Component {
  render() {
    return (
      <React.Fragment>

        <Hero isColor='primary' isSize='small' isFullWidth>
          <HeroBody>
            <TitleCard />
          </HeroBody>
        </Hero>

        <NavBar />
        
      </React.Fragment>
    )
  }
}