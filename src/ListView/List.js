// This module renders the main List view, where a user can see their list of words

import React, { Component } from 'react';
import { Columns } from "bloomer"
import ListPane from './ListPane';
import ListSideBar from './ListSideBar';

export default class List extends Component {

  state = {
    activeWordId: ""
  }

  changeActiveWord = (wordId) => {
    this.setState({ activeWordId: wordId });
  }

  render() {
    return (
      <Columns>

        <ListSideBar detailId={this.state.activeWordId} />
        <ListPane changeWord={(id) => this.changeActiveWord(id)} />

      </Columns>
    )
  }
}