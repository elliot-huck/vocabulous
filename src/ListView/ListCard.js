// This module renders the list card, which will show a single word and a remove button

import React, { Component } from 'react';
import {Card, Title} from "bloomer"

export default class ListCard extends Component {

  setActiveWord = () => {
    console.log(this.props.wordObject.id);
    this.props.showDetails(this.props.wordObject.id)

  }

  render() {
    return(
      <Card>
        <Title onClick={() => this.setActiveWord()}>{this.props.wordObject.word}</Title>
      </Card>
    )
  }
}