import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.A = "851048c5e9e31628790ae0311342fb83ea4d5b93a84c8c54e054d804be1fdeb5",
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/fea978363d0c440cb91cefabc3306164'
    )
  )
)

const Dashboard = ({address}) => {
  const [sanityTokens, setSanityTokens] = useState([])
  const [thirdWebTokens, setThirdWebTokens] = useState([])
  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch("https://ni7fe2in.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%20'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
      const sanityTokens = (await coins.json()).result
      setSanityTokens(sanityTokens)
      setThirdWebTokens(sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))
      )
    }
    // return getSanityAndThirdWebTokens ()
  }, [])
 // console.log('Sanity Tokens', sanityTokens)
 // console.log('Thirdweb Tokens', thirdWebTokens)
  return  (
  <Wrapper>
    <Sidebar />
    <MainContainer>
     <Header 
     walletAddress={address}
     sanityTokens={sanityTokens}
      thirdWebTokens={thirdWebTokens}
     />
     <Main 
      walletAddress={address}
      sanityTokens={sanityTokens}
       thirdWebTokens={thirdWebTokens}
     />
     </MainContainer>
  </Wrapper>
  )
  
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`

const MainContainer = styled.div`
  flex: 1
  `
