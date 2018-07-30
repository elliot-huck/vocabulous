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
  }
});

export default LocalApi