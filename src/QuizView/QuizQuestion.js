
import React, { Component } from 'react';
import { Card, Tiles, Tile, Title, Tag, Button } from "bloomer"

export default class QuizQuestion extends Component {


  nextButton = () => {

  }
  render() {
    // console.log(this.props.questionList[this.props.currentQuestion].otherAnswers)
    const currentQuestion = this.props.questionList[this.props.currentQuestion];
    const answers = this.props.questionList[this.props.currentQuestion].otherAnswers;

    return (
      <Card>
        <Title>{currentQuestion.word}</Title>
        <Tile isAncestor>

          <Tile isParent isVertical>
            <Tile isChild>
              <Tag>A: {answers[0]}</Tag>
            </Tile>
            <Tile isChild>
              <Tag>C: {answers[2]}</Tag>
            </Tile>
          </Tile>

          <Tile isParent isVertical>
            <Tile isChild>
              <Tag>B: {answers[1]}</Tag>
            </Tile>
            <Tile isChild>
              <Tag>D: {answers[3]}</Tag>
            </Tile>
          </Tile>

        </Tile>

      </Card>
    )
  }
}