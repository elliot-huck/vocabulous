// This module renders the list pane, which will show all the user's words in a list

import React, { Component } from 'react';
import { Box, Column } from 'bloomer';
import LocalApi from '../Api/LocalApi';
import ListCard from "./ListCard"

export default class ListPane extends Component {

  state = {
    userWordList: []
  }

  updateList = () => {
    const activeUser = sessionStorage.getItem("activeUserId");
    LocalApi.getUserWords(activeUser)
      .then(wordList => {
        wordList = wordList.map(eachWord => {
          return eachWord.word;
        });
        this.setState({ userWordList: wordList });
      });
  }

  componentDidMount() {
    this.updateList();
  }

  render() {
    return (
      <Column isSize={9}>

        <Box>
          {this.state.userWordList.map(singleWord => {
            return <ListCard key={singleWord.id}
              wordObject={singleWord}
              showDetails={this.props.changeWord}
              reloadWords={() => { this.updateList() }} />
          })}
        </Box>

      </Column>
    )
  }
}