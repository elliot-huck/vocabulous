// This module renders the main Quiz view, where the user can see how many quizzes they've completed and take quizzes of words in their word list

import React, { Component } from 'react';
import { Columns, Box } from "bloomer"
import QuizStats from "./QuizStats"
import QuizPane from "./QuizPane"

export default class Quiz extends Component {

  state = {
    quizInProgress: false,
  }

  startQuiz = () => {
    this.setState({ quizInProgress: true });
  }

  finishQuiz = () => {
    this.setState({ quizInProgress: false })
  }



  render() {
    if (this.state.quizInProgress) {
      return (
        <Columns isCentered isVCentered>
          <QuizPane end={() => { this.finishQuiz() }} />
        </Columns>
      )
    } else {
      return (
        <Box>
          <Columns isCentered isVCentered>
            <QuizStats begin={() => { this.startQuiz() }} />
          </Columns>
        </Box>
      )
    }

  }
}