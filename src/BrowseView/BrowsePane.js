import React, { Component } from 'react'
import { Box, Title } from 'bloomer';
import BrowseCard from './BrowseCard';

export default class BrowsePane extends Component {

  render() {
    return (
      <Box>

        <span>Click on a word to see its definition and add it to your list</span>
        {this.props.wordBatch.map(eachWord => {
          return <BrowseCard
            key={this.props.wordBatch.indexOf(eachWord)}
            showDetails={this.props.showDetails}
            show={eachWord.word} />
        })}
      </Box>
    )
  }
}