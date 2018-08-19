import React, { Component } from 'react'
import { Card, Title } from 'bloomer';

export default class BrowseCard extends Component {

  render() {
    return (
      <Card>
        <Title className={`${this.props.targetNumber}`} onClick={this.props.showDetails}>{this.props.show.word}</Title>
        <p style={{fontStyle: "italic"}}>{this.props.show.partOfSpeech}</p>
        <p>{this.props.show.definition}</p>
        <br/>
        <p style={{fontStyle: "italic"}}>{this.props.show.sentence}</p>
        {this.props.button}
      </Card>
    )
  }
}