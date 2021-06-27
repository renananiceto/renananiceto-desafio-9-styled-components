import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #2018EB;
`
const Btn = styled.button`
  width: 5rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`
const Paragraph = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
`

export default class App extends Component {
  state = {
    cont: 0
  }

  add = () => {
    if (this.state.cont < 10) {
      this.setState({
        cont: this.state.cont + 1
      })
    }
  }

  remuve = () => {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1
      })
    }
  }

  render() {
    return (
      <Container>
        <Paragraph>CONTADOR</Paragraph>
        <Btn onClick={this.add}>+</Btn>
        <p>{this.state.cont}</p>
        <Btn onClick={this.remuve} >-</Btn>
      </Container>
    )
  }
}

