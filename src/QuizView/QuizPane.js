import React, { Component } from 'react';
import { Box, Button } from "bloomer";
import QuizQuestion from "./QuizQuestion"
import QuizButton from "./QuizButton"

export default class QuizStats extends Component {

  state = {
    questionList: [
      {
        word: "",
        rightAnswer: "",
        otherAnswers: [""]
      }, {}, {}, {}, {}, {}, {}
    ],
    currentQuestion: 0
  }

  nextQuestion = () => {
    this.setState((prevState) => {
      return { currentQuestion: prevState.currentQuestion + 1 };
    });
  }

  componentDidMount() {
    const newQuiz = [];
    for (let i = 1; i <= 5; i++) {
      const questionObject = {
        word: `word ${i}`,
        rightAnswer: `answer ${i}`,
        otherAnswers: ["wrong", "false", "nope"]
      }
      const lastIndex = questionObject.otherAnswers.length + 1;
      const randomIndex = Math.floor(Math.random() * lastIndex);
      questionObject.otherAnswers.splice(randomIndex, 0, questionObject.rightAnswer);
      // console.log("all answers", questionObject.otherAnswers);
      newQuiz.push(questionObject);
    }
    this.setState({ questionList: newQuiz });
  }



  render() {
    return (
      <Box>
        <h1>Choose the correct definition for...</h1>
        <QuizQuestion
          questionList={this.state.questionList}
          currentQuestion={this.state.currentQuestion} />
        <QuizButton
          questionFinished={this.state.currentQuestion}
          lastQuestion={this.state.questionList.length}
          continue={() => { this.nextQuestion() }}
          finish={() => { this.props.end() }} />
      </Box>
    )
  }
}