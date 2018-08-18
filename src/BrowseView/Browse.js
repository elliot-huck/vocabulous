// This module renders the main Browse view, where the user can browse words to add to their list

import React, { Component } from 'react';
import { Button } from "bloomer"
import ExternalApi from "../Api/ExternalApi"
import BrowsePane from "./BrowsePane"

export default class Browse extends Component {


  state = {
    currentWordBatch: [
      {
        word: ""
      },
      {
        word: ""
      },
      {
        word: ""
      },
      {
        word: ""
      }]
  }

  newWordBatch = () => {
    ExternalApi.getMoreWords()
      .then(response => {
        const wordArray = response.map(eachResponse => {
          return { word: `${eachResponse.word}` }
        })
        this.setState({ currentWordBatch: wordArray })
      })
  }

  addDetails = (evt) => {
    const clickedWord = evt.target.textContent
    // define object
    const indexToReplace = parseInt((evt.target.className).split(" ")[1], 10)
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
        // Call external API for the example sentence
        ExternalApi.getWordSentence(clickedWord)
          .then(sentResponse => {
            const sentenceDetail = sentResponse.examples[0];
            const theActualSentence = sentenceDetail.text;
            detailedWord.sentence = theActualSentence;
            // Set the state by replacing the clicked word's index with the new detail object
            this.setState((prevState) => {
              prevState.currentWordBatch[indexToReplace] = detailedWord;
              return { currentWordBatch: prevState.currentWordBatch }

            })
          })
      })

  }

  componentDidMount() {
    this.newWordBatch();
  }

  render() {

    return (
      <React.Fragment>

        <Button isColor="primary" onClick={() => { this.newWordBatch() }}>Get different words</Button>
        <BrowsePane
          wordBatch={this.state.currentWordBatch}
          showDetails={(evt) => { this.addDetails(evt) }}
        />

      </React.Fragment>
    )
  }
}