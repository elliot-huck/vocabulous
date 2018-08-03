// This module renders the main Quiz view, where the user can take quizzes of words in their word list

import React, { Component } from 'react';
import { Columns } from "bloomer"
import QuizStats from "./QuizStats"
import QuizPane from "./QuizPane"

export default class Quiz extends Component {

  state = {
    takingQuiz: false
  }

  startQuiz = () => {
    this.setState({ takingQuiz: true });
  }

  finishQuiz = () => {
    this.setState({ takingQuiz: false })
  }

  render() {
    if (this.state.takingQuiz) {
      return (
        <Columns isCentered isVCentered>
          <QuizPane end={() => {this.finishQuiz()}} />
        </Columns>
      )
    } else {
      return (
        <Columns isCentered isVCentered>
          <QuizStats begin={() => {this.startQuiz()}} />
        </Columns>
      )
    }

  }
}