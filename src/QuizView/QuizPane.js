// This module renders the quiz that is currently being taken

import React, { Component } from 'react';
import { Box, Tile } from "bloomer";
import QuizQuestion from "./QuizQuestion"
import QuizButton from "./QuizButton"
import LocalApi from '../Api/LocalApi';

export default class QuizStats extends Component {

  state = {
    // This blank question object is to keep React from freaking out when it tries to mount question 1
    questionList: [{
      word: "",
      rightAnswer: "",
      allAnswers: ["", "", "", ""]
    }],
    currentQuestionNumber: 0,
    currentQuestionAnswered: false,
    numCorrect: 0
  }


  checkAnswer = (evt) => {
    if (evt.target.tagName === "SPAN" && !this.state.currentQuestionAnswered) {
      const userSelection = evt.target.textContent;
      const currentQuestion = this.state.questionList[this.state.currentQuestionNumber]

      if (userSelection === currentQuestion.rightAnswer) {
        this.setState((prevState) => {
          return {
            numCorrect: prevState.numCorrect + 1
          };
        });
      }

      this.setState({ currentQuestionAnswered: true })
    }
  }

  nextQuestion = () => {
    this.setState((prevState) => {
      return {
        currentQuestionNumber: prevState.currentQuestionNumber + 1,
        currentQuestionAnswered: false
      };
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
        // console.log("response", response)
        const newConnection = {
          userId: parseInt(sessionStorage.getItem("activeUserId"), 10),
          quizId: response.id
        }
        alert(`You got ${rightAnswers} questions right out of ${totalQuestions}`)
        LocalApi.addUserQuizConnection(newConnection).then(response => {
          this.props.end();
        }
        )
      })
  }

  // THis method takes an array and shuffles its elements to different indices
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // This method creates a new quiz
  createNewQuiz = () => {
    // Defines an array that will contain all the question objects
    let newQuiz = [];
    const currentUser = sessionStorage.getItem("activeUserId")
    LocalApi.getUserWords(currentUser)
      .then(response => {
        // allWords is an array of strings containing the words of each word object retrieved from the API
        const allWords = response.map(element => {
          return element.word;
        })
        // allDefinitions is an array of strings containing all the definitions of the word objects retrieved from the API
        const allDefinitions = allWords.map(word => {
          return word.definition;
        })
        this.shuffleArray(allWords)
        for (let i = 0; i < 5; i++) {
          const newQuestion = {};
          newQuestion.word = allWords[i].word;
          newQuestion.rightAnswer = allWords[i].definition;

          const someDefinitions = [`${allWords[i].definition}`];
          while (someDefinitions.length < 4) {
            let j = Math.floor(Math.random() * allDefinitions.length);
            if (!(someDefinitions.includes(allDefinitions[j]))) {
              someDefinitions.push(allDefinitions[j]);
            }
          }
          this.shuffleArray(someDefinitions)
          newQuestion.allAnswers = someDefinitions;
          newQuiz.push(newQuestion);
        }
        this.shuffleArray(newQuiz);
        this.setState({
          questionList: newQuiz,
          currentQuestionNumber: 0,
          currentQuestionAnswered: false,
          numCorrect: 0
        })
      })
  }

  componentDidMount() {
    this.createNewQuiz();
  }



  render() {

    while (this.state.currentQuestionNumber < this.state.questionList.length) {
      let quizButton;
      const finalQuestion = (this.state.currentQuestionNumber === this.state.questionList.length - 1);
      if (this.state.currentQuestionAnswered) {
        if (finalQuestion) {
          quizButton =
            <QuizButton
              buttonColor="info"
              buttonText="End Quiz"
              buttonClick={() => { this.showScore() }}
            />
        } else {
          quizButton =
            <QuizButton
              buttonColor="primary"
              buttonText="Next Question"
              buttonClick={() => { this.nextQuestion() }}
            />
        }


      }

      return (
        <Box onClick={(evt) => { this.checkAnswer(evt) }}>
          <h1>Choose the correct definition for...</h1>
          <Tile>

            <QuizQuestion
              currentQuestion={this.state.questionList[this.state.currentQuestionNumber]}
              submitAnswer={() => { this.answerQuestion() }}
              increaseScore={() => this.increaseScore()}
              advance={() => (this.nextQuestion())}
            />

          </Tile>
          <Tile>
            {quizButton}
          </Tile>
        </Box>
      )

    }
  }
}