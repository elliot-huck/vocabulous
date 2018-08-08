import React, { Component } from 'react'
import { Box, Title, Button } from 'bloomer';
import LocalApi from "../Api/LocalApi"
import BrowseCard from './BrowseCard';

export default class BrowsePane extends Component {

  addWordToList = (wordToAdd) => {
    const currentUser = sessionStorage.getItem("activeUserId");
    console.log("current user", currentUser);
    const wordToSearch = wordToAdd.word;
    console.log(wordToSearch);

    LocalApi.searchWords(wordToSearch)
      .then(matchingWords => {
        console.log(matchingWords)

        if (matchingWords.length === 0) {
          console.log("That word is not in the database yet");

          LocalApi.saveWord(wordToAdd)
            .then(response => {
              const addedWordId = response.id;
              console.log(addedWordId);
              const newUserWordConnection = {
                userId: currentUser,
                wordId: addedWordId
              }
              LocalApi.addUserWordConnection(newUserWordConnection)
            })
            
        } else {
          console.log("That word is in the database")
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