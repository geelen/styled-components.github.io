import React from 'react'
import styled from 'styled-components'

const colors = {
  red: 'color: red',
  blue: 'color: lightblue'
}

const Outer = styled.div`
  padding: 1rem;
`

const H1 = styled.h1`
  ${colors.blue}
  ${props => props.theme.bg}
`

const P = styled.p`
  ${props => props.special ? colors.red : colors.blue}
  ${props => props.theme.bg}
`

const Invert = styled.div`
${ props => props.updateTheme({
  bg: 'background: black;'
})}
`

const P2 = styled(P)`
  color: peru;
`

export default () => (
  <Outer>
    <Invert>
      <H1>Hihihihi</H1>
    </Invert>
    <P>Hi there Alan</P>
    <P special>This one should be red</P>
    <P2>This one should be inverted</P2>
  </Outer>
)
