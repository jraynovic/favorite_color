import * as ActionTypes from './ActionTypes';
import axios from "axios";

export const getAllColors = () => async(dispatch)=>{
    try {
      const response = await axios.get(`http://localhost:5001/colors`)
      if(response){
        dispatch(setAllColors(response.data))
      }
    } catch (err) {
      console.log(`Error: ${JSON.stringify(err)}`);
    }
}

export const setFavoriteColor = (color)=> async(dispatch)=>{
  dispatch(setFavColor(color))
}

export const setAllColors = (colors) =>({
  type:ActionTypes.SET_ALL_COLORS,
  payload:colors
})

export const setFavColor = (favColor)=>({
  type:ActionTypes.SET_FAVORITE_COLOR,
  payload:favColor
})