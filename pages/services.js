import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden';
import Card from '../components/card'
import Browser from '../assets/skills/browser.svg'
import Calender from '../assets/skills/calendar.svg'
import Consulting from '../assets/skills/consulting.svg'
import Img from '../assets/skills/img.svg'
import Lab from '../assets/skills/lab.svg'
import MagnifyingGlass from '../assets/skills/magnifying-glass.svg'
import Star from '../assets/skills/star.svg'
import Stats from '../assets/skills/stats.svg'
import User from '../assets/skills/user.svg'
import DesignIcon from '../assets/design-icon.svg'
import TrainingIcon from '../assets/training-icon.svg'
import ConsultingIcon from '../assets/consulting-icon.svg'
import "../styles.scss"
import Plx from 'react-plx';
import Head from 'next/head';


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
  },
  centerAlign: {
    justifyContent:'center',
    display:'flex'
  },
  services: {
    height:'auto',
    padding:'40px'
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
    height:'210px',
    background: 'rgba(255, 255, 255, .3)',
    textAlign: 'center',
    padding:'20px',
    margin:'0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});


class Process extends React.Component {

  render() {

  const { classes } = this.props;


  return (
      <div className={classes.root}>

      <Head>
        <title>Academy – Our Services</title>
        <meta name="description" content="We are a Digtial Product Studio that takes UX & Design Thinking principles and applies them directly to your workflow and product build outs. We take a User-Centric approach to design and development and help transform organizations products, services, and strategies." />
      </Head>

      <Grid container style={{paddingTop: '150px', paddingBottom: '200px'}}>

      <Grid container>
        <Plx
        className='MyAwesomeParallax'
        parallaxData={ ParallaxData } // your parallax effects, see beneath
        animateWhenNotInViewport={ true }
        style={{width:'100%'}}
        >

        <Grid container>
          <Grid item xs={1} sm={2}></Grid>
          <Grid item xs={10} sm={4} md={4} lg={3}>
            <Typography variant='display2'>
              Our
            </Typography>
            <Typography variant='display1' gutterBottom>
              Services
            </Typography>
            <Typography variant="body1" color="inherit" gutterBottom>
              We are a Digtial Product Studio that takes UX & Design Thinking principles and applies them directly to your workflow and product build outs. We take a User-Centric approach to design and development and help transform organizations products, services, and strategies.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={5}></Grid>
        </Grid>

        <Grid container>

        </Grid>

        <Grid container>
          <Grid item xs={1} sm={1} md={2} lg={2} xl={2}></Grid>
          <Grid item xs={3} sm={3} md={1} lg={1} xl={1}>
            <Typography variant="button" color="inherit" style={{paddingTop:'20px'}}>
              Read More <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_downwards</Icon>
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>

      </Plx>
        </Grid>
        </Grid>

        <Grid container className={classes.content}>
          <Grid container style={{paddingTop:'100px',paddingBottom:'100px'}}>
            <Grid item xs={1} sm={2} md={2} lg={2} xl={3}></Grid>
          <Grid item xs={10} sm={8} md={8} lg={8} xl={6} style={{display:'flex', width:'100%'}}>
            <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.services}>
              <DesignIcon />
              <Typography variant="headline" color="inherit" gutterBottom>Product Design & Development</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>We only work with highly experienced designers/developers from the world's top companies. Expect a top-class team to build your product.</Typography>
              <Button disableRipple={true} style={{paddingTop:'10px', marginBottom:'40px'}} className={"underline"} href="/work">
                <Typography variant="button" color="inherit">
                  See Our Work <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.services}>
              <ConsultingIcon />
              <Typography variant="headline" color="inherit" gutterBottom>Consulting</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>Need an expert in any of the categories below? We can embed with your team and and scale as needed.</Typography>
              <Button disableRipple={true} style={{paddingTop:'10px', marginBottom:'40px'}} className={"underline"} href="/process">
                <Typography variant="button" color="inherit">
                  See Our Process <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.services}>
              <TrainingIcon />
              <Typography variant="headline" color="inherit" gutterBottom>Training</Typography>
              <Typography variant="body1" color="inherit" gutterBottom>We offer team based training and work side-by-side with you to help implement Design Sprints, UX & Design Thinking principles into your workflow.</Typography>
              <Button disableRipple={true} style={{paddingTop:'10px', marginBottom:'40px'}} className={"underline"} href="/workshops">
                <Typography variant="button" color="inherit">
                  See Our Workshops <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                </Typography>
              </Button>
            </Grid>
          </Grid>
          </Grid>
        <Grid item xs sm={1}></Grid>
      </Grid>
          <Grid item xs={1} md={3} lg={4}></Grid>

            <Grid container spacing={8} className={classes.skillGrid} style={{flexWrap:'wrap-reverse'}} >
              <Grid item xs={1} sm={1} lg={1}></Grid>

              <Grid item xs={12} sm={8} md={6} lg={5} xl={4} style={{alignContent: 'center', display: 'flex', flexWrap:'wrap'}}>
                <Grid container spacing={8} style={{alignContent: 'center', justifyContent: 'center', display:'flex'}}>
                  <Grid item xs={6} sm={6} md={4}>
                    <Paper elevation={0} className={classes.skillItem}>
                      <MagnifyingGlass style={{marginBottom:'20px'}} />
                      <Typography variant='title' gutterBottom paragraph={true}>
                        RESEARCH
                      </Typography>
                      <Typography variant='body2' gutterBottom paragraph={true}>
                        Stakeholder Interviews, Data Analysis, Field Studies, Personas
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Img style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      UX/UI DESIGN
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Sketch, Design Language Systems, Branding, Zeplin, Icons, Logos
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Lab style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      PROTOTYPING
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      InVision, Craft, UXPin, Framer, Flinto, Marvel, Principal, Keynote
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <User style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      USABILITY TESTING
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Qualitative Research, Scripts, Questions, Analysis, Recruitment
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Calender style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      PRODUCT MANAGEMENT
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Timelines, Budgets, JIRA, Stand Ups, SCRUM, Agile, Sprint Planning
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Browser style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      DEVELOPMENT
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Front-end, Back-end, Atomic Design, Mobile Apps, Web Apps
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Stats style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      BUSINESS ANALYTICS
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      BI Dashboards, PowerBI, Tableau, Qlik Sense
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Consulting style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      CONSULTING
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Workshops, Team Training, Strategy, Design Thinking
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Star style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      BRANDING
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Logos, Design Language Systems, Marketing Materials
                    </Typography>
                  </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8} sm={8} md={2} style={{paddingBottom:'20px', paddingTop:'20px'}}>
                <Typography variant='display2'>
                  Our Skills
                </Typography>
                <Typography variant='display1' gutterBottom>
                  are On Point
                </Typography>

                <Typography variant='body1' gutterBottom>
                  Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking
                  and our process is Product Relays™.

                  We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is
                  being heard.
                </Typography>
              </Grid>

              <Grid item xs={1} sm={1} lg={1}></Grid>
            </Grid>
          </Grid>

    </div>
    );
  }
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Process));
