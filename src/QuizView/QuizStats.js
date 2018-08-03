import React, { Component } from 'react';
import { Title, Column, Card } from "bloomer"
import { Button } from '../../node_modules/bloomer/lib/elements/Button';

export default class QuizStats extends Component {


  render() {
    return (
      <Card>
        <Title>You've taken [some] quizzes! Would you like to start a new one?</Title>
        <Button isColor="primary" onClick={() => { this.props.begin() }}>Start quiz!</Button>
      </Card>
    )
  }
}