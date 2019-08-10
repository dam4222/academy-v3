import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AirbnbLogo from '../assets/Airbnb-2.svg';
import ATTLogo from '../assets/att-2.svg';
import FacebookLogo from '../assets/Facebook-2.svg';
import GoogleLogo from '../assets/Google-2.svg';
import TIMELogo from '../assets/Time-2.svg';
import UberLogo from '../assets/Uber-2.svg';
import ChanelLogo from '../assets/Chanel-2.svg';
import MediumLogo from '../assets/Medium_black-2.svg';
import SlackLogo from '../assets/Slack-2.svg';

 const tileData = [
    {
      img: <GoogleLogo style={{width: '100%'}}/>,
      title: "Google",
    },
    {
      img: <FacebookLogo style={{width: '100%'}}/>,
      title: "Facebook",
    },
    {
      img: <ATTLogo style={{width: '100%'}}/>,
      title: "AT&T",
    },
    {
      img: <TIMELogo style={{width: '100%'}}/>,
      title: "Time",
    },
    {
      img: <UberLogo style={{width: '100%'}}/>,
      title: "Uber",
    },
    {
      img: <MediumLogo style={{width: '100%'}}/>,
      title: "Medium",
    },
    {
      img: <SlackLogo style={{width: '100%'}}/>,
      title: "Slack",
    },
    {
      img: <AirbnbLogo style={{width: '100%'}}/>,
      title: "Airbnb",
    },
    {
      img: <ChanelLogo style={{width: '100%'}}/>,
      title: "Chanel",
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

function LogoGridSprints(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={12} sm={6} className={classes.skillGrid} style={{flexWrap:'wrap-reverse', alignContent: 'center', justifyContent: 'center'}} >
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
    <Grid item xs={1} sm={3}></Grid>


    </div>
  );
}

LogoGridSprints.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogoGridSprints);
