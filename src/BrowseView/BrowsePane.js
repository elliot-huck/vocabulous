import React, { Component } from 'react'
import { Box, Title } from 'bloomer';
import BrowseCard from './BrowseCard';

export default class BrowsePane extends Component {

  render() {
    return (
      <Box>

        <span>This is the browse pane</span>
        {this.props.wordBatch.map(eachWord => {
          return <BrowseCard
            key={this.props.wordBatch.indexOf(eachWord)}
            show={eachWord.word} />
        })}
      </Box>
    )
  }
}