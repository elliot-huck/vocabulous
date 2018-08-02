// This module renders the list card, which will show a single word and a remove button

import React, { Component } from 'react';
import { Card, Title, Button } from "bloomer"
import LocalApi from '../Api/LocalApi';

export default class ListCard extends Component {

  setActiveWord = () => {
    const newActiveWord = this.props.wordObject.id;
    this.props.showDetails(newActiveWord)
  }

  deleteWord = () => {
    const wordToDelete = this.props.wordObject.id;
    const currentUser = sessionStorage.getItem("activeUserId");
    console.log("Remove word #" + wordToDelete + " from user #" + currentUser);

    // This part is broken
    LocalApi.getUserWordConnection(wordToDelete, currentUser)
      .then(response => {
        const connectionToDelete = response[0].id;
        LocalApi.deleteUserWordConnection(connectionToDelete)
      }).then(wordDeleted => {
        console.log("word is deleted")
        this.props.reloadWords()
      })
  }

  render() {
    return (
      <Card>
        <Title onClick={() => this.setActiveWord()}>{this.props.wordObject.word}</Title>
        <Button onClick={() => this.deleteWord()}>Remove</Button>
      </Card>
    )
  }
}