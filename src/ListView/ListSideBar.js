// This module renders the list side bar which will show the details of any word the user clicks

import React, { Component } from 'react';
import { Box, Card } from 'bloomer';
import DetailCard from "./DetailCard"

export default class ListSideBar extends Component {

  render() {
    if (this.props.detailId === "") {
      return (
      <Box className="column is-one-quarter">
        <h1>See details</h1>
      </Box>
      )
    } else {
      return (
        <Box className="column is-one-quarter">
          <DetailCard wordId={this.props.detailId} />
        </Box>
      )
    }
  }

}