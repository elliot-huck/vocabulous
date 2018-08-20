// This module renders the list side bar which will show the details of any word the user clicks

import React, { Component } from 'react';
import { Box, Column } from 'bloomer';
import DetailCard from "./DetailCard"

export default class ListSideBar extends Component {

  render() {
    if (this.props.detailId === "") {
      return (
        <Column>
          <Box>
            <h1>(click a word to see its details here)</h1>
          </Box>
        </Column>

      )
    } else {
      return (
        <Column>
          <Box>
            <DetailCard wordId={this.props.detailId} />
          </Box>
        </Column>
      )
    }
  }

}