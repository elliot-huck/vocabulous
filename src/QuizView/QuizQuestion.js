
import React, { Component } from 'react';
import { Card, Tiles, Tile, Title, Tag, Button } from "bloomer"

export default class QuizQuestion extends Component {

  render() {
    return (
      <Card>
        <Title>Current word</Title>
        <Tile isAncestor>

          <Tile isParent isVertical>
            <Tile isChild>
              <Tag>A: </Tag>
            </Tile>
            <Tile isChild>
              <Tag>C: </Tag>
            </Tile>
          </Tile>

          <Tile isParent isVertical>
            <Tile isChild>
              <Tag>B: </Tag>
            </Tile>
            <Tile isChild>
              <Tag>D: </Tag>
            </Tile>
          </Tile>

        </Tile>

        <Button isColor="primary" onClick={() => { this.props.end() }}>Next Question</Button>
        <Button isColor="info" onClick={() => { this.props.end() }}>End Quiz</Button>

      </Card>
    )
  }
}