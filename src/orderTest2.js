import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  padding: 1rem;
  p { color: red; }
`

const Inner = styled.div`
  p { color: blue; }
`

const AlternateInner = styled(Inner)`
  p { color: green; }
`

export default () => (
  <div>
    <AlternateInner/>
    <Outer>
      <p>This should be red</p>
      <Inner>
        <p>This should be blue</p>
      </Inner>
      <AlternateInner>
        <p>This should be green</p>
      </AlternateInner>
    </Outer>
  </div>
)
