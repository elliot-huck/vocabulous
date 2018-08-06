// This module renders the button that will either advance to the next quiz question or finish the quiz, save the results, and then display them

import React, { Component } from "react"
import { Button } from "bloomer"

export default class QuizButton extends Component {


  render() {

    if (this.props.questionFinished < this.props.lastQuestion - 1) {
      return (
        <Button
          isColor="primary"
          onClick={() => { this.props.continue() }}
        >
          Next Question
      </Button>
      )
    } else {
      return (
        <Button isColor="info"
        onClick={() => {this.props.grade()}}>End Quiz</Button>
      )
    }
  }
}