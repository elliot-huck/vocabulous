// This module renders the nav bar that appears under/inside the header bar at the top of every page. The Link elements route to the three main views using the matching Routes in Main.js

import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Tabs, TabList, Tab } from "bloomer"

export default class NavBar extends Component {

  changeActiveTab = (evt) => {
    let clickedTab;
    if (evt.target.tagName === "LI") {
      clickedTab = evt.target;
    } else if (evt.target.tagName === "A") {
      clickedTab = evt.target.parentNode
    }
    
    const allTabs = evt.target.parentNode.parentNode.childNodes;
    allTabs.forEach(tab => {
      if (tab === clickedTab) {
        tab.classList += " is-active"
      } else {
        tab.classList = ""
      }
    });
    // evt.target.parentNode.classList += " is-active"
  }

  render() {
    return (
      <Tabs isBoxed isFullWidth>
        <TabList onClick={(evt) => { this.changeActiveTab(evt) }}>

          <Tab>
            <Link to="/browse">Browse</Link>
          </Tab>

          <Tab>
            <Link to="/list">List</Link>
          </Tab>

          <Tab>
            <Link to="/quiz">Quiz</Link>
          </Tab>

        </TabList>
      </Tabs>
    )
  }
}