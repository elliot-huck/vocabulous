import React, { Component } from 'react'
import { Box, Title } from 'bloomer';
import BrowseCard from './BrowseCard';

export default class BrowsePane extends Component {

  render() {
    return (
      <Box>

        <span>Click on a word to see its definition and add it to your list</span>
        {this.props.wordBatch.map(eachWord => {
          const targetNumber = this.props.wordBatch.indexOf(eachWord)
          return <BrowseCard
            key={targetNumber}
            targetNumber={targetNumber}
            showDetails={this.props.showDetails}
            show={eachWord} />
        })}
      </Box>
    )
  }
}