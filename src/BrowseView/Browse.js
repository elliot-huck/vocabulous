// This module renders the main Browse view, where the user can browse words to add to their list

import React, { Component } from 'react';
import { Button } from "bloomer"
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
    // console.log("clicked on ", clickedWord)
    // define object
    const indexToReplace = parseInt((evt.target.className).split(" ")[1], 10)
    // console.log("replacing index #", indexToReplace)
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
            // console.log("full word object", detailedWord);
            // Set the state by replacing the clicked word's index with the new detail object
            this.setState((prevState) => {
              // console.log("running set state")
              // console.log(indexToReplace)
              // console.log(detailedWord)
              prevState.currentWordBatch[indexToReplace] = detailedWord;
              // console.log(prevState)
              return { currentWordBatch: prevState.currentWordBatch }

            })
          })
      })

  }

  componentDidMount() {
    this.newWordBatch();
  }

  render() {


    // ExternalApi.getMoreWords()
    //   .then(response => {
    //     console.log(response)
    //   })
    // [{id: word: ""}]

    return (
      <React.Fragment>

        <Button onClick={() => { this.newWordBatch() }}>Get different words</Button>
        <BrowsePane
          wordBatch={this.state.currentWordBatch}
          showDetails={(evt) => { this.addDetails(evt) }}
        />

      </React.Fragment>
    )
  }
}