// This module renders the welcome view when a user first logs in

import React, { Component } from 'react'
import {Title, Box} from "bloomer"

export default class Welcome extends Component {

  render() {
    return (
      <Box>
        <Title>Welcome to Vocabulous!</Title> 
        <h1>Click on the navbar above to browse new words, see your word list, or take a quiz.</h1>
      </Box>
    )
  }
}