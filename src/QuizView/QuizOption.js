
import React, { Component } from 'react';
import { Tile, Tag } from "bloomer"

export default class QuizOption extends Component {

 

  render() {
    return (
      <Tile isChild>
        <Tag>{this.props.option}</Tag>
      </Tile>
    )
  }
}