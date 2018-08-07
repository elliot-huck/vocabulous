import React, { Component } from 'react'
import { Card, Button, Title } from 'bloomer';
import BrowseDetails from './BrowseDetails';

export default class BrowseCard extends Component {

  state = {
    showingDetails: false
  }

  displayDetails = () => {
    this.setState({ showingDetails: true })
  }

  clicked = () => {
    console.log("clicked")
  }

  // componentDidUpdate(oldProps) {
  //   if (this.props !== oldProps) {
  //     this.setState({ showingDetails: true })
  //   }
  // }

  render() {

    if (this.state.showingDetails) {

      return (
        <Card>
          <Title className={`${this.props.targetNumber}`} onClick={this.props.showDetails}>{this.props.show.word}</Title>
          <p>{this.props.show.partOfSpeech}</p>
          <p>{this.props.show.definition}</p>
          <p>{this.props.show.sentence}</p>
          <Button onClick={console.log("add clicked")}>Add to list</Button>
          {/* <Button isColor="danger">Not interested</Button> */}
        </Card>
      )
    } else {
      return (
        <Card>
          <Title className={`${this.props.targetNumber}`} onClick={this.props.showDetails}>{this.props.show.word}</Title>
          <p>{this.props.show.partOfSpeech}</p>
          <p>{this.props.show.definition}</p>
          <p>{this.props.show.sentence}</p>
          {this.props.button}
          {/* <Button isColor="danger">Not interested</Button> */}
        </Card>
      )
    }
  }
}