import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Airbnb from '../assets/airbnb.svg';
import AmericanExpress from '../assets/american-express-1.svg';
import ATT from '../assets/att-logo.svg';
import CBRE from '../assets/cbre.svg';
import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import LG from '../assets/lg.svg';
import NBC from '../assets/nbc-logo-2.svg';
import TIME from '../assets/time.svg';

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

function LogoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Grid item xs={1}></Grid>
      <Grid item xs={12} className={classes.skillGrid} style={{flexWrap:'wrap-reverse', alignContent: 'center', justifyContent: 'center'}} >
        <Grid container spacing={8}>
          {tileData.map(tile => (
          <Grid key={tile.title} item xs={4} sm={4} md={4} style={{alignContent: 'flex-end', display: 'flex'}}>
            <div className={classes.skillItem}>
              <div key={tile.img} className={classes.tile}>
                {tile.img}
              </div>
            </div>
          </Grid>
          ))}
        </Grid>
    </Grid>
    <Grid item xs={1}></Grid>


    </div>
  );
}

LogoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogoGrid);
