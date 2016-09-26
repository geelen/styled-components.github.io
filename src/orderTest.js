import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  padding: 1rem;
  color: red;
`

const Inner = styled.p`
  color: blue;
`

const AlternateInner = styled(Inner)`
  color: green;
`

export default () => (
  <div>
    <AlternateInner/>
    <Outer>
      This should be red
      <Inner>
        This should be blue
      </Inner>
      <AlternateInner>
        This should be green
      </AlternateInner>
    </Outer>
  </div>
)
