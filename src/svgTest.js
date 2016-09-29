import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  margin-top: 2rem;
  margin-left: 2rem;
  stroke: black;
  g {
    stroke: red;
  }
  line {
    stroke-width: 4px;
  }
`

const Vertical = styled.g`
  /* export two class selectors to override the selector defined in SVG above */
  && {
    stroke: blue;
  }
  /* this should work because Vertical's CSS gets injected after SVG, but it don't */
  line {
    stroke-width: 1px;
  }
`

export default () => (
  <SVG>
    <line x1={10} y1={10} x2={90} y2={10}/>
    <Vertical>
      <line x1={10} y1={10} x2={90} y2={90}/>
    </Vertical>
  </SVG>
)
