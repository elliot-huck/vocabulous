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
  }
});

export default LocalApi