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
        <Button isColor="info" onClick={() => { this.props.finish() }}>End Quiz</Button>
      )
    }
  }
}