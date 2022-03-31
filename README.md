Favorite-Color

Description: 
    This is a simple full stack application that allows users to select and see their favorite color and display their choice. 

Future addditions:
    -The ability to change the pool of colors.
    -Add history to show what colors have been selected recently as a favorite.
    Currently the server side is capable and planned to have these options. The client side will need further implemation to acheive these abilities

How to run: 
  1) clone repo
  2) run 'npm i' or 'yarn' to install dependencies in root
  3) change directory to 'client' and run 'npm i' or 'yarn' to install     dependencies in client.
  4) inside the root of the project run command 'npm dev' or 'yarn dev'. 
  
  This will start both the server and client as well as open the client in a new window.

  **this project was created in vs code using yarn package manager and has not been tested in other enviroments or with npm. Though it should operate
  similarly. The database should be preloaded with options. If this fails use postman or simialar enviroment to make a post request to manually add the contents 
  url:http://localhost:5001/colors
  body: {
    "colors":[{"color":"red","hexCode":"#FF0000"}, {"color":"orange","hexCode":"#FFA500"}, {"color":"yellow","hexCode":"#FFFF00"}, {"color":"green","hexCode":"#00FF00"}, {"color":"blue","hexCode":"#0000FF"}, {"color":"indigo","hexCode":"#4B0082"},{"color":"violet","hexCode":"#8F00FF"}] 
   } 