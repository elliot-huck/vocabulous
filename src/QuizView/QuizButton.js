// This module renders the button that will either advance to the next quiz question or finish the quiz, save the results, and then display them

import React, { Component } from "react"
import { Button } from "bloomer"

export default class QuizButton extends Component {


  render() {
    return (
      <Button isColor={this.props.buttonColor} onClick={() => {this.props.buttonClick()}}>{this.props.buttonText}</Button>
    )
  }
}