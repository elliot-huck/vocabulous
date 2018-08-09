// This module renders the current quiz question being viewed

import React, { Component } from 'react';
import { Card, Tile, Title } from "bloomer"
import QuizOption from './QuizOption';

export default class QuizQuestion extends Component {


  render() {

    const answers = this.props.currentQuestion.allAnswers;

    let possibleAnswers = [];

    for (let i = 0; i < answers.length; i++) {
      possibleAnswers.push(<QuizOption text={answers[i]} />)
    }

    return (
      <Card>
        <Title>{this.props.currentQuestion.word}</Title>
        <Tile isAncestor>          {/* {possibleAnswers} */}

          <Tile isParent isVertical>
            {possibleAnswers[0]}
            {possibleAnswers[1]}
          </Tile>

          <Tile isParent isVertical>
            {possibleAnswers[2]}
            {possibleAnswers[3]}
          </Tile>

        </Tile>
      </Card>
    )
  }
}