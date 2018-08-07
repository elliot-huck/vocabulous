// This module renders the main Browse view, where the user can browse words to add to their list

import React, { Component } from 'react';
import ExternalApi from "../Api/ExternalApi"
import BrowsePane from "./BrowsePane"

export default class Browse extends Component {


  state = {
    currentWordBatch: [
      {
        word: "test"
      },
      {
        word: "example"
      },
      {
        word: "word"
      },
      {
        word: "owl"
      }]
  }

  newWordBatch = () => {

  }

  addDetails = (evt) => {
    const clickedWord = evt.target.textContent
    console.log("clicked on ", clickedWord)
    // define object
    console.log("replacing index #", indexToReplace)
    const detailedWord = {
      word: clickedWord
    }

    // Call external API for definitions
    ExternalApi.getWordDefinition(clickedWord)
      .then(defResponse => {

        const definitionDetail = defResponse[0].text;
        const partOfSpeechDetail = defResponse[0].partOfSpeech;
        detailedWord.partOfSpeech = partOfSpeechDetail
        detailedWord.definition = definitionDetail;

        ExternalApi.getWordSentence(clickedWord)
          .then(sentResponse => {
            const sentenceDetail = sentResponse.examples[0];
            const theActualSentence = sentenceDetail.text;
            detailedWord.sentence = theActualSentence;
            console.log("full word object", detailedWord);

            // this.setState(())
          })
      })

    // set def and part of speech
    // call ext api for example
    // set example sentence
    // set state
  }


  render() {


    // ExternalApi.getMoreWords()
    //   .then(response => {
    //     console.log(response)
    //   })
    // [{id: word: ""}]

    return (
      <BrowsePane
        wordBatch={this.state.currentWordBatch}
        showDetails={(evt) => { this.addDetails(evt) }}
      />
    )
  }
}