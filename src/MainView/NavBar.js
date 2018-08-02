// This module renders the nav bar that appears under/inside the header bar at the top of every page. The Link elements route to the three main views using the matching Routes in Main.js

import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Tabs, TabList, Tab } from "bloomer"

export default class NavBar extends Component {

  render() {
    return (
      <Tabs isBoxed isFullWidth>
        <TabList>

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