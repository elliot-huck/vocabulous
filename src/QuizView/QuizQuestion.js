// This module renders the current quiz question being viewed

import React, { Component } from 'react';
import { Card, Tile, Title } from "bloomer"
import QuizOption from './QuizOption';

export default class QuizQuestion extends Component {

  state = {

  }

  checkAnswer = (evt) => {
    if (evt.target.tagName === "SPAN") {
      const userSelection = evt.target.textContent;

      if (userSelection === this.props.currentQuestion.rightAnswer) {
        this.props.increaseScore();
        this.props.submitAnswer()
        console.log("Correct!")
        // this.props.advance()
        // evt.target.classList += " is-success"
      } else {
        this.props.submitAnswer()
        console.log("Try again...")
        // evt.target.classList += " is-danger"
      }
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.currentQuestion !== oldProps.currentQuestion) {
      console.log("new question")
    }
  }

  render() {

    const currentQuestion = this.props.currentQuestion;
    const answers = currentQuestion.allAnswers;

    return (
      <Card>
        <Title>{currentQuestion.word}</Title>
        <Tile isAncestor onClick={(evt) => { this.checkAnswer(evt) }}>

          <Tile isParent isVertical>
            <QuizOption
              option={answers[0]}
            // answerQuestion={(evt) => { this.checkAnswer(evt) }}
            />
            <QuizOption
              option={answers[1]}
            // answerQuestion={(evt) => { this.checkAnswer(evt) }}
            />
          </Tile>

          <Tile isParent isVertical>
            <QuizOption
              option={answers[2]}
            // answerQuestion={(evt) => { this.checkAnswer(evt) }}
            />
            <QuizOption
              option={answers[3]}
            // answerQuestion={(evt) => { this.checkAnswer(evt) }}
            />
          </Tile>

        </Tile>
      </Card>
    )
  }
}