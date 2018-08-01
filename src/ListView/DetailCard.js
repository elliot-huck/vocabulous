import React, { Component } from 'react';
import LocalApi from "../Api/LocalApi"
import { Card, Title } from 'bloomer';

export default class DetailCard extends Component {

  state = {
    wordToRender: {}
  }

  componentDidMount() {
    console.log("mount", this.props.wordId)
      LocalApi.getWordById(this.props.wordId)
        .then(word => {
          console.log(word)
          this.setState({wordToRender: word});
        })
  }

  render() {
    return (
      <Card>
        <Title>{this.state.wordToRender.word}</Title>
      </Card>
    )
  }
}