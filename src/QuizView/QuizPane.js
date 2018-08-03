import React, { Component } from 'react';
import { Box } from '../../node_modules/bloomer/lib/elements/Box';
import QuizQuestion from "./QuizQuestion"

export default class QuizStats extends Component {

  state = {
    questionList: [],
    currentQuestion: 0
  }


  render() {
    return (
      <Box>
        <h1>Choose the correct definition for...</h1>
        <QuizQuestion end={() => { this.props.end() }} />
      </Box>
    )
  }
}