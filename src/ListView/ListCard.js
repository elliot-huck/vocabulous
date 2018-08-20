// This module renders the list card, which will show a single word and a remove button

import React, { Component } from 'react';
import { Card, Title, Column } from "bloomer"
import LocalApi from '../Api/LocalApi';

export default class ListCard extends Component {

  setActiveWord = () => {
    const newActiveWord = this.props.wordObject.id;
    this.props.showDetails(newActiveWord)
  }

  deleteWord = (evt) => {
    evt.preventDefault();
    const wordToDelete = this.props.wordObject.id;
    const currentUser = sessionStorage.getItem("activeUserId");

    LocalApi.getUserWordConnection(wordToDelete, currentUser)
      .then(response => {
        const connectionToDelete = response[0].id;
        return LocalApi.deleteUserWordConnection(connectionToDelete)
      }).then(wordDeleted => {
        // Reloads the user's word list and clears sidebar details
        this.props.reloadWords()
        this.props.showDetails("")
      })
  }

  render() {
    return (
      <Card className="columns">

        <Column isSize={10}>
          <Title isSize={4} onClick={() => this.setActiveWord()}>
            {this.props.wordObject.word}
          </Title>
        </Column>
        
        <Column>
          <a onClick={(evt) => this.deleteWord(evt)}>
            remove
          </a>
        </Column>

      </Card>
    )
  }
}