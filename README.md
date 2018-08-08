
# Vocabulous
Vocabulous is a vocabulary-building app where users can view random words, save interesting words to a personal word list, and take quizzes on the words that are saved in that list.

## Technologies used:
- React
- JSON Server
- Wordnik API
- Bulma
- Bloomer

## Try it out yourself:
To run this project on your own machine, do the following (requires npm):
1. Fork/download this GitHub repository
1. Run `$ npm install` in your terminal from the project directory (found at `/vocabulous`)
1. Create a file named ApiKey.js in the Api directory (found at `/vocabulous/src/Api/`)
1. Paste the code below into the ApiKey.js file, replacing "YOUR_API_KEY_HERE" with [your own Wordnik API key](https://developer.wordnik.com/ "Sign up for Wordnik API access")
```javascript
// This module holds an API key and exports it to ExternalApi

const Api = Object.create(null, {
  key: {
    // Paste your Wordnik API key below
    value: "YOUR_API_KEY_HERE"
  }
})

export default Api
```
5. Run `$ npm start` from the project directory to open the React App
5. In a separate terminal, run `$ json-server -p 5050 -w src/Api/database.json` to activate the JSON Server
5. Have fun!
