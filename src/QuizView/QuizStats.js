// This module displays stats on past quizzes. Right now, this is limited to the number of quizzes taken by the current user

import React, { Component } from 'react';
import { Title, Card } from "bloomer"
import { Button } from '../../node_modules/bloomer/lib/elements/Button';
import LocalApi from '../Api/LocalApi';


export default class QuizStats extends Component {
state = {
  quizzesTaken: ""
}

componentDidMount() {
  const user = sessionStorage.getItem("activeUserId");
  LocalApi.getUserQuizConnections(user)
  .then(response => {
    this.setState({quizzesTaken: response.length});
  })
}

  render() {
    return (
      <Card>
        <Title>You've taken {this.state.quizzesTaken} quizzes! Would you like to start a new one?</Title>
        <Button isColor="primary" onClick={() => { this.props.begin() }}>Start quiz!</Button>
      </Card>
    )
  }
}