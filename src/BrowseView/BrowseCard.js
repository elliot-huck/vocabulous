import React, { Component } from 'react'
import { Card, Button, Title } from 'bloomer';

export default class BrowseCard extends Component {

  render() {
    return (
      <Card>
      <Title onClick={this.props.showDetails}>{this.props.show}</Title>
        <Button isColor="success">Add word</Button>
        <Button isColor="danger">Not interested</Button>
      </Card>
    )
  }
}