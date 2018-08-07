// This module renders the main Browse view, where the user can browse words to add to their list

import React, { Component } from 'react';
import ExternalApi from "../Api/ExternalApi"
import BrowsePane from "./BrowsePane"

export default class Browse extends Component {


  state = {
    currentWordBatch: [
      {
        word: "test",
      },
      {
        word: "example",
      },
      {
        word: "word",
      },
      {
        word: "owl",
      }]
  }

  newWordBatch = () => {

  }


  render() {


    // ExternalApi.getMoreWords()
    //   .then(response => {
    //     console.log(response)
    //   })
    // [{id: word: ""}]

    return (
      <BrowsePane wordBatch={this.state.currentWordBatch} />
    )
  }
}