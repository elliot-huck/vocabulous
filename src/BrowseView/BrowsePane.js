import React, { Component } from 'react'
import { Box, Button } from 'bloomer';
import LocalApi from "../Api/LocalApi"
import BrowseCard from './BrowseCard';

export default class BrowsePane extends Component {

  addWordToList = (wordToAdd) => {
    const currentUser = parseInt(sessionStorage.getItem("activeUserId"), 10);
    const wordToSearch = wordToAdd.word;

    // Searches LocalApi to see if the word is already in the database
    LocalApi.searchWords(wordToSearch)
      .then(matchingWords => {

        if (matchingWords.length === 0) { //The word is not in the local api
          // Adds the word to the local database
          LocalApi.saveWord(wordToAdd)
            .then(response => {
              const addedWordId = response.id;
              const newUserWordConnection = {
                userId: currentUser,
                wordId: addedWordId
              }
              // Adds the word from local database to the user's list
              LocalApi.addUserWordConnection(newUserWordConnection)

            })

        } else { // The word is already in the local database

          const wordId = matchingWords[0].id;
          // Checks to see if the user already has the word
          LocalApi.getUserWordConnection(wordId, currentUser)
            .then(userHasWord => {
              if (userHasWord.length === 0) { // The user does not have the word
                const newUserWordConnection = {
                  userId: currentUser,
                  wordId: wordId
                }
                LocalApi.addUserWordConnection(newUserWordConnection)
              } else { // The user does have the word
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
          let addButton;
          if (eachWord.definition) {
            addButton = <Button isColor="primary" onClick={() => { this.addWordToList(eachWord) }}>Add to list</Button>
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