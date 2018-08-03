import React, { Component } from 'react';
import { Box } from "bloomer";
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
    currentQuestionNumber: 0
  }

  nextQuestion = () => {
    this.setState((prevState) => {
      return { currentQuestionNumber: prevState.currentQuestionNumber + 1 };
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
          currentQuestion={this.state.questionList[this.state.currentQuestionNumber]} />
        <QuizButton
          questionFinished={this.state.currentQuestionNumber}
          lastQuestion={this.state.questionList.length}
          continue={() => { this.nextQuestion() }}
          finish={() => { this.props.end() }} />
      </Box>
    )
  }
}