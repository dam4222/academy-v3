import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import WorkshopPanels from './workshopPanels';
import Typography from '@material-ui/core/Typography';
import DesignBetter from '../assets/design-better.svg';
import InVisionLogoV from '../assets/invision-logo-pink-v3.svg';
import { ParallaxBanner } from 'react-scroll-parallax';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexWrap:'wrap',
    paddingTop: '100px',
  },
});

const verticalText = {
  transform: 'rotate(-90deg)',
  position: 'relative',
  transformOrigin: 0,
  width: '400px',
  height: '760px',
  display: 'flex',
  alignItems: 'center',
}

const verticalLogo = {
  transform: 'rotate(90deg)',
  position: 'relative',
  display: 'flex',
  marginLeft: '70px',
  marginRight: '30px'
}

const imgContainer = {
  justifyContent: 'center',
  display: 'flex',
  paddingBottom:'20px',
  minHeight: '250px'
}

const imgStyle = {
  backgroundSize: 'cover',
  width:'100%',
  maxWidth: '375px',
  margin: '0 auto',
  height: 'auto',
}

function OurServices(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={4}>
          <Typography variant='display2'>
            Our
          </Typography>
          <Typography variant='display1' style={{paddingBottom:'100px'}}>
            Services
          </Typography>
        </Grid>
        <Grid item xs sm={6}>
        </Grid>
      </Grid>

      <Grid container style={{paddingBottom:'10vh'}}>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={1} sm={1}>
        <Typography style={verticalText} variant="caption" color="secondary">
          PROUD PARTNERS OF <DesignBetter style={verticalLogo} /><InVisionLogoV style={verticalLogo}/>
        </Typography>

        </Grid>
          <Grid item xs={10} sm={7}>
            <Grid container>
              <Grid item xs={10} sm={10} md={6} style={imgContainer}>
                <div
                  style={{
                    background: 'url(https://cdn1.academyux.com/wp-content/uploads/2018/06/14003313/workshop_opti-0.jpg) center',
                    backgroundSize: 'cover',
                    width:'100%',
                    maxWidth: '375px',
                    margin: '0 auto',
                    height: 'auto',
                  }}
                ></div>

              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={4}>
                <Typography variant='headline' style={{paddingBottom:'20px'}}>
                  Embed w/ Team
                </Typography>
                <Typography variant='body1' gutterBottom>
                We set up a Academy-led design studio within the client’s organization, taking full responsibility for all the client’s design and digital requirements.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'100px'}} disableRipple={true} className={"underline"} href="/services">
                  <Typography variant="button" color="inherit">
                    Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={10} sm={10} md={6} style={imgContainer}>
                <div
                  style={{
                    background: 'url(https://cdn1.academyux.com/wp-content/uploads/2018/06/14003314/workshop_opti-2.jpg) center',
                    backgroundSize: 'cover',
                    width:'100%',
                    maxWidth: '375px',
                    margin: '0 auto',
                    height: 'auto',
                  }}
                ></div>
              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={4}>
                <Typography variant='headline' style={{paddingBottom:'20px'}}>
                  Design Sprint Bootcamp
                </Typography>
                <Typography variant='body1' gutterBottom>
                We run a brief, intense and immersive engagement, working together with the client through a Design Sprint while training the team on how to run one themselves.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'100px'}} disableRipple={true} className={"underline"} href="/workshops">
                  <Typography variant="button" color="inherit">
                    Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container>

              <Grid item xs={10} sm={10} md={6} style={imgContainer}>
                <div
                  style={{
                    background: 'url(https://cdn1.academyux.com/wp-content/uploads/2018/06/14003316/workshop_opti-1.jpg) center',
                    backgroundSize: 'cover',
                    width:'100%',
                    maxWidth: '375px',
                    margin: '0 auto',
                    height: 'auto',
                  }}
                ></div>
              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={4}>
                <Typography variant='headline' style={{paddingBottom:'20px'}}>
                  Build In-House
                </Typography>
                <Typography variant='body1' gutterBottom>
                We work alongside the client to set up a design studio/innovation hub powered by their people, processes and technology.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'100px'}} disableRipple={true} className={"underline"} href="/services">
                  <Typography variant="button" color="inherit">
                    Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
      </div>

    );
  }

OurServices.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurServices);
