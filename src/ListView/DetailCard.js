import React, { Component } from 'react';
import LocalApi from "../Api/LocalApi"
import { Card, Title } from 'bloomer';

export default class DetailCard extends Component {

  state = {
    // wordId: this.props.wordId,
    wordToRender: {}
  }

// The components above this are changing state, but it's not affecting props of this component, so it won't update

  componentDidMount() {
      LocalApi.getWordById(this.props.wordId)
        .then(word => {
          this.setState({wordToRender: word[0]});
        })
  }

  componentDidUpdate(oldProps) {
    if(this.props.wordId !== oldProps.wordId) {

      LocalApi.getWordById(this.props.wordId)
      .then(word => {
        this.setState({wordToRender: word[0]});
      })
    }
  }

  render() {
    return (
      <Card>
        <Title>{this.state.wordToRender.word}</Title>
        <p style={{fontStyle: "italic"}}>{this.state.wordToRender.partOfSpeech}</p>
        <p>{this.state.wordToRender.definition}</p>
        <br/>
        <p style={{fontStyle: "italic"}}>{this.state.wordToRender.sentence}</p>
      </Card>
    )
  }
}