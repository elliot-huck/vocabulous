
import React, { Component } from 'react';
import { Card, Tiles, Tile, Title, Tag, Button } from "bloomer"

export default class QuizQuestion extends Component {


  checkAnswer = (evt) => {
    const userSelection = evt.target.textContent;
    if (userSelection === this.props.currentQuestion.rightAnswer) {
      console.log("Correct!")
      evt.target.classList += " is-success"
    } else {
      console.log("Try again...")
      evt.target.classList += " is-danger"
    }

  }

  render() {

    const currentQuestion = this.props.currentQuestion;
    const answers = currentQuestion.otherAnswers;

    return (
      <Card>
        <Title>{currentQuestion.word}</Title>
        <Tile isAncestor>

          <Tile isParent isVertical>

            <Tile isChild>
              <Tag onClick={(evt) => { this.checkAnswer(evt) }}>
                {answers[0]}
              </Tag>
            </Tile>

            <Tile isChild>
              <Tag onClick={(evt) => { this.checkAnswer(evt) }}>
                {answers[1]}
              </Tag>
            </Tile>

          </Tile>

          <Tile isParent isVertical>

            <Tile isChild>
              <Tag onClick={(evt) => { this.checkAnswer(evt) }}>
                {answers[2]}
              </Tag>
            </Tile>

            <Tile isChild>
              <Tag onClick={(evt) => { this.checkAnswer(evt) }}>
                {answers[3]}
              </Tag>
            </Tile>

          </Tile>

        </Tile>

      </Card>
    )
  }
}