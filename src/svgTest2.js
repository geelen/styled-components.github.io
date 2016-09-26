import React from 'react'
import styled from 'styled-components'

const width = 50
const height = 100
const Vertical = styled.g`
  line {
    stroke-width: 5px;
  }
`

export default () => (
  <Vertical>
    <line x1={0} y1={0} x2={width} y2={height}/>
  </Vertical>
)
