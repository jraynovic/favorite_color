import React from 'react'
import Header from './Header'
import Colors from './Colors'
import History from './History'
import {Grid, Container} from '@material-ui/core'

const Main = () => {
  return (
    <Container>
      <Header/> 
      <Colors/> 
      <History/>
    </Container>
  )
}
export default Main
