import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  > * {
    flex-grow: 1;
  }
`

const Half = styled.div`
  padding: 1rem;
  > h2 {
    margin: 0;
    padding: 1rem;
  }
`

const SecondHalf = styled(Half)`
  background: #ccc;
  ${props => props.updateTheme({
    fg: 'white',
    bg: '#444'
  })}
`

const Button = styled.div`
  color: ${props => props.theme.fg || 'black'}
  background: ${props => props.theme.bg || 'none'}
  cursor: pointer;
  padding: 0.5em 1em;
  border: 1px solid;
`

export default () => (
  <Container>
    <Half>
      <h3>This is normal</h3>
      <Button>Ok</Button>
    </Half>
    <SecondHalf>
      <h3>This is inverted</h3>
      <Button>Ok</Button>
    </SecondHalf>
  </Container>
)
