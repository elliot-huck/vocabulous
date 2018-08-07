// This module renders the main Browse view, where the user can browse words to add to their list

import React, { Component } from 'react';
import ExternalApi from "../Api/ExternalApi"
import BrowsePane from "./BrowsePane"

export default class Browse extends Component {


  state = {
    currentWordBatch: [{
      word: "test",
      partOfSpeech: "noun",
      definition: "trying something to find out about it",
      sentence: "This is only a test.",
      wordFrequency: 4.9,
      id: 1
    },
    {
      word: "example",
      partOfSpeech: "noun",
      definition: "a representative form or pattern",
      sentence: "This is an example of a sentence.",
      wordFrequency: 4.67,
      id: 2
    },
    {
      word: "word",
      partOfSpeech: "noun",
      definition: "a group of letters that conveys meaning",
      sentence: "This sentence has five words.",
      wordFrequency: 4.9,
      id: 3
    },
    {
      word: "owl",
      partOfSpeech: "noun",
      definition: "the best animal",
      sentence: "Owls are basically the cats of the bird world.",
      wordFrequency: 4.67,
      id: 4
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
      <BrowsePane />
    )
  }
}