

import Api from "./ApiKey"

const ExternalApi = Object.create(null, {

  getMoreWords: {
    value: () => {
      return fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true
      &includePartOfSpeech=noun%2C%20verb%2C%20adverb%2C%20adjective
      &
      excludePartOfSpeech=auxiliary-verb%2C%20family-name%2C%20given-name%2C%20idiom%2C%20noun-plural%2C%20noun-posessive%2C%20past-part
      iciple%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-posessive%2C%20prefix%2C%20suffix%2C%20phrasal-verb
      &maxCorpusCount=750&minDictionaryCount=10&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=4&api_key=${Api.key}`)
        .then(e => e.json())
    }
  },

  getWordDefinition: {
    value: (word) => {
      return fetch(`https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=${Api.key}`)
        .then(e => e.json())
    }
  },

  getWordSentence: {
    value: (word) => {
      return fetch(`https://api.wordnik.com/v4/word.json/${word}/examples?includeDuplicates=false&useCanonical=false&limit=1&api_key=${Api.key}`)
        .then(e => e.json())
    }
  }

})

export default ExternalApi