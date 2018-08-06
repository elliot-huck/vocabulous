// This module renders the main Browse view, where the user can browse words to add to their list

import React, { Component } from 'react';
import ExternalApi from "../Api/ExternalApi"

export default class Browse extends Component {

  render() {
    ExternalApi.getMoreWords()
      .then(response => {
        console.log(response)
      })
    return <main>Browse Page</main>
  }
}