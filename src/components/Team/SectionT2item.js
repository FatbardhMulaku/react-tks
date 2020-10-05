import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Timg1 from './../../assets/Team/Team1.jpg';
 
const useStyles = makeStyles((theme) => ({
  cont:{
  display: "flex",
  flexWrap:'wrap',
  justifyContent:'space-evenly'
},
root: {
margin: 20
},
media: {
height: 430,
width: 370
},
txt:{
  marginLeft: '10%'
},
[theme.breakpoints.down('sm')]: {
media: {
  height: 390,
  width: 320
}
}}
    
));

function SectionT2item() {
    const classes = useStyles();    
    return (
        <div className={classes.cont}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Timg1}
              title="Team"
            />
            <CardContent>
              <hr />
              <h3 className={classes.txt}>Eroll Ymeri</h3>
              <p className={classes.txt}>Director</p>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    )
}

export default SectionT2item
