import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import Card from '../components/card'
import LogoLine from '../components/logoLine'
import SimpleTable from '../components/simpleTable'
import "../styles.scss"
import Plx from 'react-plx';
import scrollToComponent from 'react-scroll-to-component-ssr';
import Head from 'next/head';
import Divider from '@material-ui/core/Divider';
import SimpleImageGrid from '../components/simpleImageGrid'



const ParallaxData = [
  {
    start: 0,
    end: 1500,
    properties: [
      {
        startValue: 0,
        endValue: 300,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: .75,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ]
  },
];

const textStyles = {
  color: '#848484',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
    },
  },
  centerAlign: {
    justifyContent:'center',
    display:'flex'
  },
  mission: {
    height:'auto',
    paddingTop:'40px'
  },
  skillGrid: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: 'linear-gradient(56deg, #ebeff5, #faf5f5)',
    position:'relative',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  content: {
    width: '100%',
    background: 'white',
    position: 'relative',
    height: '100%',
  },
  spacing:{
    paddingBottom:'100px',
  },
  skillItem:{
    width:'100%',
    height:'310px',
    background: 'rgba(255, 255, 255, .3)',
    textAlign: 'center',
    padding:'20px',
    margin:'0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
});


class Staffing extends React.Component {

  render() {

  const { classes } = this.props;

  function handleDelete() {

  }


  return (
      <div className={classes.root}>

      <Head>
        <title>Academy – Our Services</title>
        <meta name="description" content="We are a Product Design Agency with a Human-Centered Approach. We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles." />
      </Head>

      <Grid container style={{paddingTop: '150px'}}>

      <Grid container>
        <Plx
        className='MyAwesomeParallax'
        parallaxData={ ParallaxData } // your parallax effects, see beneath
        animateWhenNotInViewport={ true }
        style={{width:'100%'}}
        >
          <Grid container>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} xl={4} style={{display:'flex', width: '100%', justifyContent:'center', paddingTop:'30px'}}>
              <Typography variant="headline" style={{fontSize:'24px'}} color="inherit" gutterBottom align="center">
              UX Staffing with a <strong>Human Centered Approach</strong>, we represent the best UX talent in the world.
              </Typography>

            </Grid>

            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} xl={4} style={{display:'flex', width: '100%', justifyContent:'center', paddingBottom:'60px', paddingTop:'30px'}}>
              <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/contact">
                <Typography variant="button" color="inherit">
                  Contact Us <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                </Typography>
              </Button>

            </Grid>

            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
          </Grid>


      </Plx>
        </Grid>
        </Grid>

        <Grid container className={classes.content + " peoples-work"}>

            <Typography variant="display3" gutterBottom style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', textAlign:'center', zIndex:'10', color:'white'}}>Our Peoples Work</Typography>

            <SimpleImageGrid />


        </Grid>

        <Grid container style={{paddingBottom:'100px'}}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8} style={{display:'flex', width:'100%'}}>
          <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={"services"}>

            <div style={{height:'45%'}}>
            </div>


            <Typography variant="headline" color="inherit" gutterBottom>Freelance</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>Our freelance talent is available to help provide ongoing support for your team. Book hourly, day or fixed fee.
            </Typography>
            <Button variant="text" onClick={() => scrollToComponent(this.Rates, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See Rates <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={"services"}>
            <div style={{height:'45%'}}>

            </div>

            <Typography variant="headline" color="inherit" gutterBottom>Full-Time</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>We have cultivated an amazing group of User Experience Experts and will help you find the perfect candidate.</Typography>
            <Button variant="text" onClick={() => scrollToComponent(this.Details, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See Details <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={"services"}>
            <div style={{height:'45%'}}>

            </div>

            <Typography variant="headline" color="inherit" gutterBottom>Team</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>Need a whole product team? We can arrange a SWAT team of amazing talent to help execute your next project.</Typography>
            <Button variant="text" onClick={() => scrollToComponent(this.How, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See How <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>

        </Grid>
        </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
    </Grid>

        <Grid container className={classes.content}>
          <Grid container style={{paddingTop:'70px'}}>
            <Grid item xs sm={1} md={1} lg={1} xl={2}></Grid>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={8} className={classes.mission} style={{padding:'40px'}}>
                <Typography align="center" variant="title" color="inherit" style={{padding:'30px', margin: '1px'}}>
                OUR PROMISE
                </Typography>
                <Typography variant="headline" color="inherit">
                  We get frustrated when outside recruiters lack the knowledge and expertise to bring in the the right people into your product organization. Finding the best quality talent is tough and its important that you work with people you trust because bringing in the best should be a top priority.
                </Typography>
            </Grid>
            <Grid item xs sm={1} md={1} lg={1} xl={2}></Grid>
          </Grid>
          <Grid container style={{paddingBottom:'100px'}}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
          <Grid item xs={12} sm={10} md={10} lg={10} xl={8} style={{display:'flex', width:'100%'}}>
            <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={"services"}>
            <div style={{height:'45%'}}>

            </div>
              <Typography variant="headline" color="inherit" gutterBottom>We find you the perfect fit</Typography>

              <Typography variant="body1" color="inherit" gutterBottom>Our expert recruiters work with you 1v1 to define your needs and find the perfect match.
              </Typography>
              <Button variant="text" onClick={() => scrollToComponent(this.Strategy, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>

              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={"services"}>
              <div style={{height:'45%'}}>

              </div>

              <Typography variant="headline" color="inherit" gutterBottom>We understand your needs</Typography>

              <Typography variant="body1" color="inherit" gutterBottom>Our leadership team has over 15 years of experience working as UX practicioners in various fields. We know our stuff.</Typography>
              <Button variant="text" onClick={() => scrollToComponent(this.Design, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>

              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={"services"}>
              <div style={{height:'45%'}}>

              </div>

              <Typography variant="headline" color="inherit" gutterBottom>We thoroughly vet our talent</Typography>

              <Typography variant="body1" color="inherit" gutterBottom>Every person we represent is vetted through a rigourous interview process which is evalutated by industry experts.</Typography>
              <Button variant="text" onClick={() => scrollToComponent(this.Facilitate, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>

              </Button>
            </Grid>

          </Grid>
          </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
      </Grid>

      <Grid container>
        <Grid container style={{paddingTop:'70px', paddingBottom:'100px'}}>
          <Grid item xs sm={1} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10} className={classes.mission}>
            <Typography align="center" variant="title" color="inherit" style={{padding:'30px', margin: '1px'}}>
            OUR CLIENTS
            </Typography>
              <LogoLine />
          </Grid>
          <Grid item xs sm={1} md={1} lg={1} xl={1}></Grid>
        </Grid>
        </Grid>



      <Grid container className={classes.content} style={{paddingTop:'70px', paddingBottom:'100px'}} ref={(section) => { this.Rates = section; }}>
        <Grid item xs sm={1} md={1} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={10} lg={8} xl={8} className={classes.mission} style={{padding:'40px'}}>
            <Typography align="center" variant="title" color="inherit" style={{padding:'30px', margin: '1px'}}>
            OUR RATES
            </Typography>
            <Grid container>
            <Grid item xs sm={1} md={2} lg={2} xl={3}></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6} className={classes.mission}>
            <Typography align="center" variant="body1" color="inherit">
            We believe in transparency so our pricing is clear. Our rate card gives an example based on position and experience. We strive to match industry averages and are always open to negotiating to help achieve your goals.
            </Typography>
            </Grid>
            <Grid item xs sm={1} md={2} lg={2} xl={3}></Grid>
            </Grid>

        </Grid>
        <Grid item xs sm={1} md={1} lg={2} xl={2}></Grid>
        <SimpleTable />
      </Grid>


        <Grid container style={{paddingTop:'70px', paddingBottom:'100px'}} justify="center" ref={(section) => { this.Details = section; }}>
          <Grid item xs sm={1} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10} className={classes.mission}>
            <Typography align="center" variant="headline" color="inherit">
            Looking for someone Full-Time?
            </Typography>
            <Grid container>
            <Grid item xs sm={1} md={2} lg={2} xl={3}></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6} className={classes.mission} style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}} >
            <Typography align="center" variant="body1" color="inherit" style={{paddingBottom:'30px'}}>
            We work on a negotiable % comission based on a candidates experience and total yearly compensation.
            </Typography>
            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/contact">
              <Typography variant="button" color="inherit">
                Contact Us <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
              </Typography>
            </Button>

            </Grid>

            <Grid item xs sm={1} md={2} lg={2} xl={3}></Grid>

            </Grid>

          </Grid>
          <Grid item xs sm={1} md={1} lg={1} xl={1}></Grid>
        </Grid>

        <Grid container className={"team"} style={{paddingTop:'70px', paddingBottom:'100px'}} justify="center" ref={(section) => { this.How = section; }}>
          <Grid item xs sm={1} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10} className={classes.mission}>
            <Typography align="center" variant="headline" color="inherit" style={{color:'white'}}>
            Need a Team?
            </Typography>
            <Grid container>
            <Grid item xs sm={1} md={2} lg={2} xl={3}></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={6} className={classes.mission} style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}} >
            <Typography align="center" variant="body1" color="inherit" style={{paddingBottom:'30px', color:'white'}}>
            We will work with you to determine your needs and put together and all-star team of top UX talent to work side-by-side with your organization.
            </Typography>
            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/contact">
              <Typography variant="button" color="inherit" style={{color:'white'}}>
                Contact Us <Icon style={{fontSize:'14px', verticalAlign: 'middle', color:'white'}}>chevron_right</Icon>
              </Typography>
            </Button>

            </Grid>

            <Grid item xs sm={1} md={2} lg={2} xl={3}></Grid>

            </Grid>

          </Grid>
          <Grid item xs sm={1} md={1} lg={1} xl={1}></Grid>
        </Grid>





    </div>
    );
  }
}

Staffing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Staffing));
