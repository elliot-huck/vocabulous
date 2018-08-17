// This module displays stats on past quizzes. Right now, this is limited to the number of quizzes taken by the current user

import React, { Component } from 'react';
import { Title, Card, Column, Button} from "bloomer"
import LocalApi from '../Api/LocalApi';


export default class QuizStats extends Component {
  state = {
    quizzesTaken: ""
  }

  componentDidMount() {
    const user = sessionStorage.getItem("activeUserId");
    LocalApi.getUserQuizConnections(user)
      .then(response => {
        this.setState({ quizzesTaken: response.length });
      })
  }

  render() {
    let isPlural = "zes"
    console.log(this.state.quizzesTaken)
    if (this.state.quizzesTaken === 1) {
      isPlural = ""
    }
    return (
      <Column>
        <Card>
          <Title>You've taken {this.state.quizzesTaken} quiz{isPlural}! Would you like to start a new one?</Title>
          <Button isColor="primary" onClick={() => { this.props.begin() }}>Start quiz!</Button>
        </Card>
      </Column>
    )
  }
}