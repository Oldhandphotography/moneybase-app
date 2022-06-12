import styled from 'styled-components'
import Coin from './Coin'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import React, { useEffect, useState } from 'react'
import BalanceChart from './BalanceChart'



const Portfolio = ({  thirdWebTokens, sanityTokens, walletAddress}) => {
//  thirdWebTokens[0]
  // .balanceOf(walletAddress)  .then(balance => console.log(balance))

  return (
    <Wrapper>
      <Content>
        <Top>
          <Title>PORTFOLIO VALUE</Title>
          <h2>$1,000</h2>

        </Top>
        <Chart>
          <BalanceChart />
        </Chart>

        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>

            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0, color: '#0a0b0d' }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map(coin => (
                <div key={coin}>
                  {<Coin coin={coin} />}
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`

  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`


const Top = styled.div`
  padding-top: 1rem ;
  border:2px solid white;
  border-radius: 20px;
  padding: 2rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
  margin-top: 1rem;
`

const PortfolioTable = styled.div`                                 
  margin-top: 1rem;
  border: 1px solid #282b2f;
`
const Table = styled.div`
  width: 100%;
`
const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`
const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`
const Title = styled.div`
padding-top: 1rem ;
  font-size: 1.5rem;
  font-weight: 700;
  
`