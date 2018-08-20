// This module renders the detail info for a word that has been clicked in a user's word list

import React, { Component } from 'react';
import LocalApi from "../Api/LocalApi"
import { Card, Title } from 'bloomer';

export default class DetailCard extends Component {

  state = {
    wordToRender: {}
  }

  componentDidMount() {
    LocalApi.getWordById(this.props.wordId)
      .then(word => {
        this.setState({ wordToRender: word[0] });
      })
  }

  // Runs whenever the active word id set in the state of the List component changes
  componentDidUpdate(oldProps) {
    if (this.props.wordId !== oldProps.wordId) {
      LocalApi.getWordById(this.props.wordId)
        .then(word => {
          this.setState({ wordToRender: word[0] });
        })
    }
  }

  render() {
    return (
      <Card>
        <Title>{this.state.wordToRender.word}</Title>

        <p style={{ fontStyle: "italic" }}>
          {this.state.wordToRender.partOfSpeech}</p>

        <p>
          {this.state.wordToRender.definition}</p>

        <br />

        <p style={{ fontStyle: "italic" }}>
          {this.state.wordToRender.sentence}</p>
          
      </Card>
    )
  }
}