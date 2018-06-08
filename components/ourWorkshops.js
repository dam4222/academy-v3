import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import WorkshopPanels from './workshopPanels';
import Typography from 'material-ui/Typography';
import DesignBetter from '../assets/design-better.svg';
import InVision from '../assets/invision-logo-pink.svg';
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

function OurWorkshops(props) {
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
            Workshops
          </Typography>
        </Grid>
        <Grid item xs sm={6}>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={1} sm={1}>
        <Typography style={verticalText} variant="caption" color="secondary">
          PROUD PARTNERS OF <DesignBetter style={verticalLogo} /><InVision style={verticalLogo} />
        </Typography>

        </Grid>
          <Grid item xs={10} sm={7}>
            <Grid container>
              <Grid item xs={10} sm={10} md={6} style={imgContainer}>
                <div 
                  style={{
                    background: 'url(https://cdn1.academyux.com/workshop5.jpg) center',
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
                  1 Day Workshop
                </Typography>
                <Typography variant='body1' gutterBottom>
                Join NYCs top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.
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
                    background: 'url(https://cdn1.academyux.com/workshop9.jpg) center',
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
                  Bootcamp
                </Typography>
                <Typography variant='body1' gutterBottom>
                  The leader-led bootcamp will train your team on how to run a Design Sprints start to finish. Our team of experts will instruct you every step of the way while working on a real problem your team is facing.
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
                    background: 'url(https://cdn1.academyux.com/workshop1.jpg) center',
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
                If you are missing any skills on your team or are in need of some product leadership, we can help fill the gaps providing a range of services. We will work side-by-side with you and train your team along the way.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'100px'}} disableRipple={true} className={"underline"} href="/workshops">
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

OurWorkshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurWorkshops);
