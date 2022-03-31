import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllColors, setFavoriteColor } from "../redux/ActionCreators";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  container:{
    padding:10,
  },
  color: {
    height: "10rem",
    width: "10rem",
    borderRadius: 100,
    margin: 10,
    padding:10,
    textAlign:'center',
    cursor:'pointer',
  },
  colorSelected: {
    height: "10rem",
    width: "10rem",
    borderRadius: 100,
    border: "1px solid",
    margin: 10,
    padding:10,
    cursor:'pointer'
  },
  colorContainer:{
    display:'flex',
    justifyContent:'center',
  }
});

const Colors = () => {
  const allColors = useSelector((state) => state.colors.allColors);
  const favoriteColor = useSelector((state) => state.colors.favoriteColor);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllColors());
  }, []);

  const renderColors = (quantity) => {
    if (quantity === 3) {
      return allColors.slice(0, 3).map((color) => {
        return (
          <Grid className={classes.colorContainer} item xs={6} md={12 / quantity}>
            <div
              className={
                color.color === favoriteColor.color
                  ? classes.colorSelected
                  : classes.color
              }
              style={{ backgroundColor: color.hexCode }}
              onClick={() => dispatch(setFavoriteColor(color))}
            >
              {color.color}
            </div>
          </Grid>
        );
      });
    } else {
      return allColors.slice(3, 7).map((color) => {
        return (
          <Grid className={classes.colorContainer} item xs={6} md={12 / quantity}>
            <div
              className={
                color.color === favoriteColor.color
                  ? classes.colorSelected
                  : classes.color
              }
              style={{ backgroundColor: color.hexCode }}
              onClick={() => dispatch(setFavoriteColor(color))}
            >
              {color.color}
            </div>
          </Grid>
        );
      });
    }
  };
  return (
    <Grid item xs={12}>
      <Paper className={classes.container} elevation={4}>
        <Grid container xs={12}>
          {renderColors(3)}
          {renderColors(4)}
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Colors;
