import React from 'react'
import styled from 'styled-components'

import Vertical from './svgTest2'

const width = 50
const height = 100
const SVG = styled.svg`
  margin: 2rem;
  line {
    stroke-width: 10px;
    fill: none;
    stroke: black;
    ${ console.log("PARSING SVG") }
    ${ () => console.log("EXEC SVG") }
  }
`

const Horizontal = styled.g`
  line {
    shape-rendering:crispEdges;
    stroke: red;
  }
`
const Horiz = styled(Horizontal)`
  line {
    stroke: blue;
  }
`

const Vert = styled(Vertical)`
  line {
    stroke-width: 1px;
  }
`

export default () => (
  <SVG>
    <Horiz>
      <line x1={0} y1={0} x2={width} y2={0}/>
    </Horiz>
    <Vert/>
  </SVG>
)
