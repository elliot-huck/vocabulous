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

  render() {
    // if (this.state.showingDetails) {
    //   return (
    //     <React.Fragment>
    //       <BrowseDetails wordToRender={this.props.wordObject} />
    //     </React.Fragment>
    //   )
    // }
    return (
      <Card>
        <Title className={`${this.props.targetNumber}`} onClick={this.props.showDetails}>{this.props.show.word}</Title>
        <p>{this.props.show.partOfSpeech}</p>
        <p>{this.props.show.definition}</p>
        <p>{this.props.show.sentence}</p>
      <Button isColor="success">Add word</Button>
        {/* <Button isColor="danger">Not interested</Button> */}
      </Card>
    )
  }
}