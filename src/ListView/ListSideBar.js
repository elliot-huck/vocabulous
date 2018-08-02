// This module renders the list side bar which will show the details of any word the user clicks

import React, { Component } from 'react';
import { Box } from 'bloomer';
import DetailCard from "./DetailCard"
import { Tile } from '../../node_modules/bloomer/lib/grid/Tile';

export default class ListSideBar extends Component {

  render() {
    if (this.props.detailId === "") {
      return (
        <Tile isChild>

          <Box>
            <h1>(click a word to see its details here)</h1>
          </Box>

        </Tile>

      )
    } else {
      return (
        <Tile isChild>

          <Box>
            <DetailCard wordId={this.props.detailId} />
          </Box>

        </Tile>
      )
    }
  }

}