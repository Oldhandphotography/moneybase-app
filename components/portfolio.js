import styled from 'styled-components'
import Coin from './Coin'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import React, { useEffect, useState } from 'react'
//  import BalanceChart from './BalanceChart'

const portfolio = () => {
  const [ sanityTokens, setSanityTokens ] = useState([])
  useEffect(() => {
    const getCoins = async () => {
      try {

        const coins = await fetch("https://ni7fe2in.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%20'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
        
        const tempSanityTokens = await coins.json()
        console.log(tempSanityTokens)
        setSanityTokens(tempSanityTokens.result)
      }
      catch (error) {
        console.log(error)
      }
    }
   //return getCoins()
  }, [])
  return (
    <Wrapper>
      <Content>
        {/* <BalanceChart /> */}
        <Top>
          <Title>PORTFOLIO VALUE</Title>
          <h2>$1,000,000</h2>
        </Top>
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
                <div>
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

export default portfolio

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
  border:2px solid white;
  border-radius: 20px;
  padding: 2rem;
 
  
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
  font-size: 1.5rem;
  font-weight: 700;
  
`