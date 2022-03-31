import React from 'react'
import { useSelector} from 'react-redux'
import {Grid} from '@material-ui/core'
const Header = () => {
  const favoriteColor = useSelector(state=>state.colors.favoriteColor.color)
  return (
    favoriteColor? 
    <Grid item xs={12}><h1>{`My Favorite Color is ${favoriteColor.charAt(0).toUpperCase() + favoriteColor.slice(1)}`}</h1></Grid>
    : <Grid item xs={12}><h1>Select your favorite color!</h1></Grid>
  )
}
export default Header