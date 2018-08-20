// This module exports an object that holds all the methods used to query the local API for my app

const LocalApi = Object.create(null, {

// USER METHODS-------------------------------------------------------
  // Registers a new user
  addUser: {
    value: (newUser) => {
      return fetch("http://localhost:5050/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      }).then(e => e.json());
    }
  },

  // Searches the database for a given username to see if it is unique
  searchUsers: {
    value: (userInput) => {
      return fetch(`http://localhost:5050/users?userName=${userInput}`)
        .then(e => e.json())
    }
  },


// WORD METHODS------------------------------------------------------
  // Saves a word from the browse pane to the local database
  saveWord: {
    value: (wordToSave) => {
      return fetch("http://localhost:5050/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(wordToSave)
      }).then(e => e.json());
    }
  },

  // Searches the database for a given word to see if it already exists
  searchWords: {
    value: (wordToSearch) => {
      return fetch(`http://localhost:5050/words?word=${wordToSearch}`)
        .then(e => e.json())
    }
  },

  // Gets a word from the database using its id
  getWordById: {
    value: (wordId) => {
      return fetch(`http://localhost:5050/words?id=${wordId}`)
        .then(e => e.json())
    }
  },


// WORD LIST METHODS--------------------------------------------------
  // Retrieves all the words in a user's word list
  getUserWords: {
    value: (activeUser) => {
      return fetch(`http://localhost:5050/userWords?userId=${activeUser}&_expand=word`)
        .then(e => e.json())
    }
  },

  // Adds a new word to a user's word list
  addUserWordConnection: {
    value: (newConnection) => {
      return fetch("http://localhost:5050/userWords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newConnection)
      }).then(e => e.json());
    }
  },

  // Checks a user's word list to see if it contains a given word
  getUserWordConnection: {
    value: (wordId, userId) => {
      return fetch(`http://localhost:5050/userWords?userId=${userId}&wordId=${wordId}`)
        .then(e => e.json())
    }
  },

  // Removes a given word from a user's word list
  deleteUserWordConnection: {
    value: (connection) => {
      return fetch(`http://localhost:5050/userWords/${connection}`, {
        method: "DELETE"
      })
        .then(e => e.json())
    }
  },


// QUIZ METHODS-------------------------------------------------------
  // Saves the results of a finished quiz
  saveQuizResults: {
    value: (newQuiz) => {
      return fetch("http://localhost:5050/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuiz)
      }).then(e => e.json());
    }
  },

  // Adds a saved quiz to the list of quizzes that a user has completed
  addUserQuizConnection: {
    value: (newConnection) => {
      return fetch("http://localhost:5050/userQuizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newConnection)
      }).then(e => e.json());
    }
  },

  // Retrieves all of the saved quizzes a user has completed
  getUserQuizConnections: {
    value: (activeUser) => {
      return fetch(`http://localhost:5050/userQuizzes?userId=${activeUser}&_expand=quiz`)
        .then(e => e.json())
    }
  }

});

export default LocalApi