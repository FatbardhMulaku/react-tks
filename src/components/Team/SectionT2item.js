import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Timg1 from './../../assets/Team/Team1.jpg';
import Timg2 from './../../assets/Team/Team2.jpg';
import Timg3 from './../../assets/Team/Team3.jpg';
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
 
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
width: '100%'
},
txt:{
  marginLeft: '10%'
},
[theme.breakpoints.down('sm')]: {
  media: {
    height: 370,
    width: '100%'
    }
}
}
    
));

var settings = {
  className: "center",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
      }
    }
  ]

};

function SectionT2item() {
    const classes = useStyles();    
    const { t } = useTranslation();
    return (
        <Slider {...settings}>
          <div>
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
              <p className={classes.txt}>{t("Team.Section2title1")}</p>
            </CardContent>
          </CardActionArea>
        </Card>
        </div ><div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Timg2}
              title="Team"
            />
            <CardContent>
              <hr />
              <h3 className={classes.txt}> Eliza Salihu</h3>
              <p className={classes.txt}>{t("Team.Section2title2")}</p>
            </CardContent>
          </CardActionArea>
        </Card>
        </div><div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Timg3}
              title="Team"
            />
            <CardContent>
              <hr />
              <h3 className={classes.txt}>Genc Shatri</h3>
              <p className={classes.txt}>{t("Team.Section2title3")}</p>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
        <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Timg2}
              title="Team"
            />
            <CardContent>
              <hr />
              <h3 className={classes.txt}> Eliza Salihu</h3>
              <p className={classes.txt}>{t("Team.Section2title2")}</p>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
        </Slider>
    );
}

export default SectionT2item
