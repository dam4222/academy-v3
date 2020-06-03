import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Airbnb from '../assets/airbnb-3.svg';
import AmericanExpress from '../assets/amex-3.svg';
import ATT from '../assets/att-3.svg';
import CBRE from '../assets/cbre-3.svg';
import Facebook from '../assets/facebook-3.svg';
import Google from '../assets/google-4.svg';
import LG from '../assets/lg-3.svg';
import NBC from '../assets/nbc-4.svg';
import TIME from '../assets/time-3.svg';
import HUSH from '../assets/hush-1.svg';
import AKQA from '../assets/akqa-1.svg';
import BREEL from '../assets/b-reel-1.svg';
import CHIEF from '../assets/chief-1.svg';
import UBER from '../assets/uber-1.svg';
import WNW from '../assets/working-not-working-1.svg';
import DP from '../assets/dream-projects.svg';
import ORIGINATE from '../assets/originate.svg';
import VERIZON from '../assets/verizon.svg';

 const tileData = [
    {
      img: <Google style={{width: '100%'}}/>,
      title: "Google",
    },
    {
      img: <Facebook style={{width: '100%'}}/>,
      title: "Facebook",
    },
    {
      img: <UBER style={{width: '100%'}}/>,
      title: "Uber",
    },
    {
      img: <AKQA style={{width: '100%'}}/>,
      title: "AKQA",
    },
    {
      img: <HUSH style={{width: '100%'}}/>,
      title: "HUSH",
    },
    {
      img: <BREEL style={{width: '100%'}}/>,
      title: "B-Reel",
    },
    {
      img: <ORIGINATE style={{width: '100%'}}/>,
      title: "Originate",
    },
    {
      img: <VERIZON style={{width: '100%'}}/>,
      title: "Verizon",
    },
    {
      img: <CHIEF style={{width: '100%'}}/>,
      title: "Chief",
    },
    {
      img: <WNW style={{width: '100%'}}/>,
      title: "Working Not Working",
    },
    {
      img: <ATT style={{width: '100%'}}/>,
      title: "AT&T",
    },
    {
      img: <TIME style={{width: '100%'}}/>,
      title: "Time",
    },
    {
      img: <AmericanExpress style={{width: '100%'}}/>,
      title: "American Express",
    },
    {
      img: <LG style={{width: '100%'}}/>,
      title: "LG",
    },
    {
      img: <CBRE style={{width: '100%'}}/>,
      title: "CBRE",
    },
    {
      img: <Airbnb style={{width: '100%'}}/>,
      title: "Airbnb",
    },
    {
      img: <NBC style={{width: '100%'}}/>,
      title: "NBC",
    },
    {
      img: <DP style={{width: '100%'}}/>,
      title: "Dream Projects",
    },
  ];

  const styles = theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent:'center'
    },
    centerAlign: {
      justifyContent:'center',
      display:'flex'
    },
    skillGrid: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      position:'relative',
      paddingTop: '5vh',
      paddingBottom: '5vh',
    },
    content: {
      width: '100%',
      marginTop: '95vh',
      background: 'white',
      position: 'relative',
      height: '100%',
    },
    fixed: {
      position:'fixed',
      top:0,
      height: '95vh',
      overflow:'hidden'
    },
    spacing:{
      paddingBottom:'100px',
    },
    skillItem:{
      width:'100%',
      textAlign: 'center',
      margin:'0 auto',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  });

function LogoLine(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid item xs={10} className={classes.skillGrid} style={{flexWrap:'wrap-reverse', alignContent: 'center', justifyContent: 'center'}} >
        <Grid container spacing={8} style={{alignContent: 'flex-end', display: 'flex', justifyContent: 'center'}}>
          {tileData.map(tile => (
          <Grid key={tile.title} item xs={4} sm={2} md={2} style={{alignContent: 'flex-end', display: 'flex', justifyContent: 'center'}}>
            <div className={classes.skillItem}>
              <div key={tile.img} className={classes.tile}>
                {tile.img}
              </div>
            </div>
          </Grid>
          ))}
        </Grid>
    </Grid>


    </div>
  );
}

LogoLine.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogoLine);
