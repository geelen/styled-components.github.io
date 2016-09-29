import React, { Component } from 'react';
import styled, { global } from 'styled-components';

import logo from './logo.svg';
import './App.css';
import ContextDemo from './ContextDemo.js'

global`
  html {
    background: papayawhip;
  }
`

const Outer = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`

const Intro = styled.p`
  font-size: large;
`

import SvgTest from './svgTest'
import OrderTest from './orderTest'

class App extends Component {
  render() {
    return <div>
        <SvgTest/>
        <OrderTest/>
      </div>
      || (
        <Outer>
          <Header>
            <Logo src={logo} alt="logo"/>
            <h2>Styled Components</h2>
          </Header>
          <Intro>
            This is actually working!
          </Intro>
          <ContextDemo/>
        </Outer>
      );
  }
}

export default App;
