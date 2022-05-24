import React from 'react'
import Portfolio from './portfolio'
import styled from 'styled-components'
import Promos from './Promos'

const main = () => {
    return (
        <Wrapper>
            <Portfolio />
            <Promos />
        </Wrapper>
    )
}

export default main

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }

  & div {
    border-radius: 0.4 rem;
  }
  `
