import React, { Component } from 'react'
import { Box, Button } from 'bloomer';
import LocalApi from "../Api/LocalApi"
import BrowseCard from './BrowseCard';

export default class BrowsePane extends Component {

  addWordToList = (wordToAdd) => {
    const currentUser = parseInt(sessionStorage.getItem("activeUserId"), 10);
    const wordToSearch = wordToAdd.word;

    LocalApi.searchWords(wordToSearch)
      .then(matchingWords => {

        if (matchingWords.length === 0) {

          LocalApi.saveWord(wordToAdd)
            .then(response => {
              const addedWordId = response.id;
              const newUserWordConnection = {
                userId: currentUser,
                wordId: addedWordId
              }
              LocalApi.addUserWordConnection(newUserWordConnection)
            })

        } else {
          const wordId = matchingWords[0].id;
          LocalApi.getUserWordConnection(wordId, currentUser)
            .then(userHasWord => {
              if (userHasWord.length === 0) {
                const newUserWordConnection = {
                  userId: currentUser,
                  wordId: wordId
                }
                LocalApi.addUserWordConnection(newUserWordConnection)
              } else {
                alert("You already have that word in your list")
              }
            })
        }
      })
  }

  render() {
    return (
      <Box>

        <span>Click on a word to see its definition and add it to your list</span>
        {this.props.wordBatch.map(eachWord => {
          const targetNumber = this.props.wordBatch.indexOf(eachWord)
          let addButton = <span></span>
          if (eachWord.definition) {
            addButton = <Button onClick={() => { this.addWordToList(eachWord) }}>Add to list</Button>
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