import React, { Component } from 'react'
import { Card, Button, Title } from 'bloomer';
import BrowseDetails from './BrowseDetails';

export default class BrowseCard extends Component {

  state = {
    showingDetails: false
  }

  showDetails = () => {
    this.setState({ showingDetails: true })
  }

  render() {
    if (this.state.showingDetails) {
      return (
        <React.Fragment>
          <BrowseDetails wordToRender={this.props.wordObject} />
          <Button isColor="success">Add word</Button>
        </React.Fragment>
      )
    }
    return (
      <Card>
        <Title className={} onClick={this.props.showDetails}>{this.props.show}</Title>
        {/* <Button isColor="danger">Not interested</Button> */}
      </Card>
    )
  }
}