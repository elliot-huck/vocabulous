import React, { Component } from 'react';
import { Box } from '../../node_modules/bloomer/lib/elements/Box';
import QuizQuestion from "./QuizQuestion"

export default class QuizStats extends Component {

  state = {
    questionList: ["first", "second", "third"],
    currentQuestion: 0
  }

  nextQuestion = () => {
    this.setState((prevState) => {
      return { currentQuestion: prevState.currentQuestion + 1 };
    });
  }

  render() {
    return (
      <Box>
        <h1>Choose the correct definition for...</h1>
        <QuizQuestion
          question={this.state.questionList[this.state.currentQuestion]}
          advance={() => { this.nextQuestion() }}
          end={() => { this.props.end() }} />
      </Box>
    )
  }
}