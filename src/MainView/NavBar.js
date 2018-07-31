// This module renders the nav bar that appears under/inside the header bar at the top of every page

import React, { Component } from "react"
import {Tabs, TabList, Tab, TabLink, Icon} from "bloomer"

export default class HeaderBar extends Component {
  render() {
    return (
      <Tabs isFullWidth>
        <TabList>

          <Tab>
            <TabLink>
              <span>Add</span>
            </TabLink>
          </Tab>

          <Tab isActive>
            <TabLink>
              <span>List</span>
            </TabLink>
          </Tab>

          <Tab>
            <TabLink>
              <span>Quiz</span>
            </TabLink>
          </Tab>

        </TabList>
      </Tabs>
    )
  }
}