import React, { Component } from 'react'
import { Box, Title } from 'bloomer';
import BrowseCard from './BrowseCard';
import { Button } from '../../node_modules/bloomer/lib/elements/Button';

export default class BrowsePane extends Component {

  render() {
    return (
      <Box>

        <span>Click on a word to see its definition and add it to your list</span>
        {this.props.wordBatch.map(eachWord => {
          const targetNumber = this.props.wordBatch.indexOf(eachWord)
          let addButton = <span></span>
          if (eachWord.definition) {
            addButton = <Button>Add to list</Button>
          }
          return (
            <BrowseCard
              key={targetNumber}
              targetNumber={targetNumber}
              showDetails={this.props.showDetails}
              show={eachWord}
              button={addButton} />
          )

        })}

      </Box>
    )
  }
}