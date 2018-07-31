// This module renders the main List view, where a user can see their list of words

import React, { Component } from 'react';
import ListPane from './ListPane';
import ListSideBar from './ListSideBar';

export default class List extends Component {

  state = {
    activeWordId: ""
  }

  render() {
    return (
      <div className="columns">
        <ListSideBar />
        <ListPane />
      </div>
    )
  }
}