// This module renders the list pane which will show all the user's words in a list

import React, { Component } from 'react';
import { Box } from 'bloomer';
import LocalApi from '../Api/LocalApi';
import ListCard from "./ListCard"

export default class ListPane extends Component {

  state = {
    userWordList: []
  }

  componentDidMount() {
    const activeUser = sessionStorage.getItem("activeUserId");
    LocalApi.getUserWords(activeUser)
      .then(wordList => {
        wordList = wordList.map(eachWord => {
          return eachWord.word;
        });
        this.setState({ userWordList: wordList });
      });
  }

  render() {
    return (
      <Box className={"column is-three-quarters"}>
        <h3>Word list</h3>
        {this.state.userWordList.map(singleWord => {
          return <ListCard key={singleWord.id} wordObject={singleWord} />
        })}
      </Box>
    )
  }
}