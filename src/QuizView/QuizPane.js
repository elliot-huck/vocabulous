// This module renders the quiz that is currently being taken. It only renders if the state of Quiz indicates that a quiz is in progress

import React, { Component } from 'react';
import { Box, Tile } from "bloomer";
import QuizQuestion from "./QuizQuestion"
import QuizButton from "./QuizButton"
import LocalApi from '../Api/LocalApi';

export default class QuizStats extends Component {

  state = {
    // This blank question object is a placeholder so React has something blank to render when it tries to mount question 1
    questionList: [{
      word: "",
      rightAnswer: "",
      allAnswers: ["", "", "", ""],
      optionColors: ["", "", "", ""]
    }],
    currentQuestionNumber: 0,
    currentQuestionAnswered: false,
    numCorrect: 0
  }

  // Checks a users answer to see if it was correct
  checkAnswer = (evt) => {
    // Makes sure the user clicked an actual answer and hasn't already answered the question
    if (evt.target.tagName === "SPAN" && !this.state.currentQuestionAnswered) {

      const userSelection = evt.target.textContent;
      const currentQuestion = this.state.questionList[this.state.currentQuestionNumber]

      const userSelectionIndex = currentQuestion.allAnswers.indexOf(userSelection)
      const rightAnswerIndex = currentQuestion.allAnswers.indexOf(currentQuestion.rightAnswer)

      if (userSelection === currentQuestion.rightAnswer) {
        // If the user clicked the right answer, the number of correct answers is incremented
        this.setState((prevState) => {
          return {
            numCorrect: prevState.numCorrect + 1
          };
        });
      } else {
        // If the user clicked the wrong answer, that answer turns red
        currentQuestion.optionColors[userSelectionIndex] = "is-danger"
      }

      // Regardless of what the user clicked, the right answer turns green and the question is not able to be answered again
      currentQuestion.optionColors[rightAnswerIndex] = "is-success"
      this.setState({
        currentQuestionAnswered: true,
      })
    }
  }

  // Advances to the next question in the quiz
  nextQuestion = () => {
    this.setState((prevState) => {
      return {
        currentQuestionNumber: prevState.currentQuestionNumber + 1,
        currentQuestionAnswered: false,
      };
    });
  }

  // Shows the user their score and saves the quiz to the local API
  showScore = () => {
    const rightAnswers = this.state.numCorrect
    const totalQuestions = this.state.questionList.length
    const newQuiz = {
      numQuestions: totalQuestions,
      numCorrect: rightAnswers
    }

    // Saves the quiz to the database
    LocalApi.saveQuizResults(newQuiz)
      .then(response => {
        const newConnection = {
          userId: parseInt(sessionStorage.getItem("activeUserId"), 10),
          quizId: response.id
        }
        alert(`You got ${rightAnswers} questions right out of ${totalQuestions}`)

        // Adds the quiz to the user's list of completed quizzes
        LocalApi.addUserQuizConnection(newConnection)
          .then(response => {
            // Sets state of Quiz to show there is no quiz in progress
            this.props.end();
          })
      })
  }

  // Takes an array and shuffles its elements to different indices
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Creates a new quiz
  createNewQuiz = () => {
    // Defines an array that will contain all the question objects
    let newQuiz = [];
    const newQuizLength = 5;

    const currentUser = sessionStorage.getItem("activeUserId")
    LocalApi.getUserWords(currentUser)
      .then(response => {
        // allWords is an array of all the word objects in a user's word list
        const allWords = response.map(element => {
          return element.word;
        })
        // allDefinitions is an array of strings containing all the definitions of all the word objects in allWords
        const allDefinitions = allWords.map(word => {
          return word.definition;
        })
        this.shuffleArray(allWords)

        // Creates a number of newQuestion objects equal to newQuizLength and pushes them into the newQuiz array
        for (let i = 0; i < newQuizLength; i++) {
          const newQuestion = {};
          newQuestion.word = allWords[i].word;
          newQuestion.rightAnswer = allWords[i].definition;

          // multipleChoices is an array of strings containing possible definitions from the users word list. It starts with just the correct definition and adds 3 other random choices
          const multipleChoices = [`${allWords[i].definition}`];
          while (multipleChoices.length < 4) {
            // Grabs a random definition from allDefinitions
            let j = Math.floor(Math.random() * allDefinitions.length);
            // If the definition isn't already included in the multiple choice options, it pushes it into the array of options
            if (!(multipleChoices.includes(allDefinitions[j]))) {
              multipleChoices.push(allDefinitions[j]);
            }
          }

          this.shuffleArray(multipleChoices)
          newQuestion.allAnswers = multipleChoices;
          newQuestion.optionColors = ["", "", "", ""] //gray by default
          newQuiz.push(newQuestion);
        }

        this.shuffleArray(newQuiz);
        this.setState({ questionList: newQuiz })
      })
  }

  componentDidMount() {
    this.createNewQuiz();
  }

  render() {

    let quizButton;
    const finalQuestion = (this.state.currentQuestionNumber === this.state.questionList.length - 1);

    // Only shows the quiz button if the current question has been answered
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

        <h1>Click on the correct definition for...</h1>
        <Tile>
          <QuizQuestion
            currentQuestion={this.state.questionList[this.state.currentQuestionNumber]} />
        </Tile>

        <Tile>
          {quizButton}
        </Tile>

      </Box>
    )

  }
}