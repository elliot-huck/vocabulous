// This module exports an object that holds all the methods used to query the local API for my app

const LocalApi = Object.create(null, {

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

  searchUsers: {
    value: (userInput) => {
      return fetch(`http://localhost:5050/users?userName=${userInput}`)
        .then(e => e.json())
    }
  },

  searchWords: {
    value: (wordToSearch) => {
      return fetch(`http://localhost:5050/words?word=${wordToSearch}`)
        .then(e => e.json())
    }
  },

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

  getWordById: {
    value: (wordId) => {
      return fetch(`http://localhost:5050/words?id=${wordId}`)
        .then(e => e.json())
    }
  },

  getUserWords: {
    value: (activeUser) => {
      return fetch(`http://localhost:5050/userWords?userId=${activeUser}&_expand=word`)
        .then(e => e.json())
    }
  },

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

  getUserWordConnection: {
    value: (wordId, userId) => {
      return fetch(`http://localhost:5050/userWords?userId=${userId}&wordId=${wordId}`)
        .then(e => e.json())
    }
  },

  deleteUserWordConnection: {
    value: (connection) => {
      return fetch(`http://localhost:5050/userWords/${connection}`, {
        method: "DELETE"
      })
        .then(e => e.json())
    }
  },

  getUserQuizConnections: {
    value: (activeUser) => {
      return fetch(`http://localhost:5050/userQuizzes?userId=${activeUser}&_expand=quiz`)
        .then(e => e.json())
    }
  },

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
  }

});

export default LocalApi