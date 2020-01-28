import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react";
import flashCards from "./Flash-Cards"

class App extends Component {

  state = {
    flashCards: [
      { id: 1, question: "2 + 2" , answer: "4", },
      { id: 2, question:"2*2" , answer: "4", }
    ]
  }


  render() {
    return (
      <Container>
        <Header as="h1">React flash cards</Header>
        <Flash-Cards flashCards={this.state.cards}/>
      </Container>
    );
  }
}

export default App;