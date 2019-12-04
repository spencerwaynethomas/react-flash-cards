import React, { Component } from 'react';
import './App.css';
import { Container, Header, } from "semantic-ui-react";

class App extends Component {
  state = {
    cards: [{id: 1, question: "2 + 2" , answer: "4" ,}
    cards: [{id: 2, question:"2*2" , answer: ,}
    
    ]
  }


  render() {
    return (
      <Container>
        <Header as="h1">React Contact List</Header>
        <Cards cards={this.state.cards}/>
      </Container>
    );
  }
}

export default App;