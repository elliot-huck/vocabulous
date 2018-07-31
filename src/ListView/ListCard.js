// This module renders the list card, which will show a single word and a remove button

import React, { Component } from 'react';
import {Card, Title} from "bloomer"

export default class ListCard extends Component {

  render() {
    return(
      <Card>
        <Title>{this.props.wordObject.word}</Title>
      </Card>
    )
  }
}