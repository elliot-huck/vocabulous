import React, { Component } from 'react';
import { Box } from "bloomer";
import QuizQuestion from "./QuizQuestion"
import QuizButton from "./QuizButton"
import LocalApi from '../Api/LocalApi';

export default class QuizStats extends Component {

  state = {
    questionList: [
      // {
      //   word: "",
      //   rightAnswer: "",
      //   allAnswers: [""]
      // }, {}, {}, {}, {}, {}, {}
    ],
    currentQuestionNumber: 0,
    numCorrect: 0
  }

  nextQuestion = () => {
    this.setState((prevState) => {
      return { currentQuestionNumber: prevState.currentQuestionNumber + 1 };
    });
  }

  increaseScore = () => {
    this.setState((prevState) => {
      return { numCorrect: prevState.numCorrect + 1 };
    });
  }

  showScore = () => {
    const rightAnswers = this.state.numCorrect
    const totalQuestions = this.state.questionList.length
    const newQuiz = {
      numQuestions: totalQuestions,
      numCorrect: rightAnswers
    }
    LocalApi.saveQuizResults(newQuiz)
      .then(response => {
        console.log("response", response)
        const newConnection = {
          userId: parseInt(sessionStorage.getItem("activeUserId")),
          quizId: response.id
        }
        LocalApi.addUserQuizConnection(newConnection).then(
          alert(`You got ${rightAnswers} questions right out of ${totalQuestions}`)
        )
      })


  }

  componentWillMount() {
    const newQuiz = [];
    for (let i = 1; i <= 5; i++) {
      const questionObject = {
        word: `word ${i}`,
        rightAnswer: `answer ${i}`,
        allAnswers: ["wrong", "false", "nope"]
      }
      const lastIndex = questionObject.allAnswers.length + 1;
      const randomIndex = Math.floor(Math.random() * lastIndex);
      questionObject.allAnswers.splice(randomIndex, 0, questionObject.rightAnswer);
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
          currentQuestion={this.state.questionList[this.state.currentQuestionNumber]}
          increaseScore={() => this.increaseScore()}
        />
        <QuizButton
          questionFinished={this.state.currentQuestionNumber}
          lastQuestion={this.state.questionList.length}
          continue={() => { this.nextQuestion() }}
          grade={() => { this.showScore() }}
          finish={() => { this.props.end() }} />
      </Box>
    )
  }
}