import React, { Component } from 'react';
import { Title, Column, Card } from "bloomer"
import { Button } from '../../node_modules/bloomer/lib/elements/Button';
import { Tag } from '../../node_modules/bloomer/lib/elements/Tag';

export default class QuizStats extends Component {


  render() {
    return (
      <Card>
        <Title>Current word</Title>
        <Tag>option</Tag>
        <Tag>option</Tag>
        <Tag>option</Tag>
        <Tag>option</Tag>
        <Button isColor="info" onClick={() => { this.props.end() }}>End Quiz</Button>

      </Card>
    )
  }
}