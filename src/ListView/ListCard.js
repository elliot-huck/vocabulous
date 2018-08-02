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
    
    LocalApi.getUserWordConnection(wordToDelete, currentUser)
      .then(response => {
        const connectionToDelete = response[0].id;
        return LocalApi.deleteUserWordConnection(connectionToDelete)
      }).then(wordDeleted => {
        this.props.reloadWords()
        this.props.showDetails("")
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