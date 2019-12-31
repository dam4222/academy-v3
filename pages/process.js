import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Link from 'next/link'
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import Card from '../components/card'
import Browser from '../assets/skills/browser.svg'
import Calender from '../assets/skills/calendar.svg'
import Consulting from '../assets/skills/consulting.svg'
import Img from '../assets/skills/img.svg'
import Lab from '../assets/skills/lab.svg'
import MagnifyingGlass from '../assets/skills/magnifying-glass.svg'
import Star from '../assets/skills/star.svg'
import Stats from '../assets/skills/stats.svg'
import ProcessDiagram from '../assets/Product-Relay-v2.svg'
import User from '../assets/skills/user.svg'
import "../styles.scss"
import LogoGridSprints from '../components/logoGridSprints'
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
  hero:{
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: '50vh'
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
    background: 'linear-gradient(56deg, #ebeff5, #faf5f5)',
    position:'relative',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  mission: {
    height:'auto',
    paddingTop:'40px',
    position: 'relative',
    background:'white',
  },
  approach: {
    height:'auto',
    paddingTop:'80px',
    paddingBottom:'40px',
    position: 'relative',
    background:'white',
  },
  why: {
    height:'auto',
    paddingTop:'100px',
    position: 'relative',
    background:'#fafafa'
  },
  process: {
    height:'auto',
    position: 'relative',
    background:'#fafafa'
  },
  services: {
    height:'auto',
    padding:'38px'
  },
  content: {
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  spacing:{
    paddingTop:'100px',
    paddingBottom:'100px',
    background:'white',
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
        <title>Academy – Our Process</title>
        <meta name="description" content="We are a Product Design Agency with a Human-Centered Approach. We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles." />
      </Head>

      <Grid container style={{paddingTop: '150px', paddingBottom: '200px'}}>

        <Grid container>
          <Plx
          className='MyAwesomeParallax'
          parallaxData={ ParallaxData } // your parallax effects, see beneath
          animateWhenNotInViewport={ true }
          >

            <Grid container className={classes.hero}>
            <Grid item xs={1} sm={3} md={3} lg={2} xl={3}></Grid>
            <Grid item xs={10} sm={5} md={6} lg={5} xl={5}>
              <Typography variant='display4'>
                Think of us
              </Typography>
              <Typography variant='display3' gutterBottom>
                as an extension of your team
              </Typography>
              <Grid item xs={12} sm={10} md={10} lg={10} xl={6}>
                <Typography variant='body1' gutterBottom>
                We work side-by-side with cross-functional teams – including domain experts, designers, developers, researchers, product managers and end users. Using proven methodologies in Design Thinking and UX we execute Design Sprints to help rapidly prototype and find solutions. Testing methodically, we continually validate our hypotheses and define the product roadmap so that we can remain agile, prioritize features, all while considering the technological feasibility and viability.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={6} md={3} lg={2} xl={5}></Grid>
            </Grid>

          </Plx>
        </Grid>
      </Grid>

        <Grid container spacing={24} className={classes.approach}>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={2}></Grid>
            <Grid item xs={12} sm={10} md={8} lg={8} xl={8} style={{display:'flex',flexWrap:'wrap', width:'100%', paddingBottom:'80px'}}>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.services}>
                <div style={{height: '40%'}}>
                <Typography variant="title" color="inherit" gutterBottom>01</Typography>
                <Typography variant="headline" color="inherit" gutterBottom>Research & Strategy</Typography>
                <Typography variant="body1" color="inherit" gutterBottom>Our team embeds alongside yours to help define the strategic vision, conduct research and learn how to drive business value while building products users love.</Typography>
                </div>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Ethnographic Research</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Quantative Analysis</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Stakeholder Interviews</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Persona Identification</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.services}>
                <div style={{height: '40%'}}>
                <Typography variant="title" color="inherit" gutterBottom>02</Typography>
                <Typography variant="headline" color="inherit" gutterBottom>Design Sprints</Typography>
                <Typography variant="body1" color="inherit" gutterBottom>We run a 5 day concept driven Design Sprint that uses Design Thinking in cross-functional teams to design, prototype, and test solutions with users.</Typography>
                </div>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Design Thinking</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>User Journey Maps</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Concept Validation</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Feature Roadmap</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.services}>
                <div style={{height: '40%'}}>
                <Typography variant="title" color="inherit" gutterBottom>03</Typography>
                <Typography variant="headline" color="inherit" gutterBottom>Detailed Design Sprint</Typography>
                <Typography variant="body1" color="inherit" gutterBottom>We create design language systems to scale and work through complex user journeys to ensure all scenarios are accounted for tested prior to launch.</Typography>
                </div>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Design Language System</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Usability Testing</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Interactive Prototype</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Detailed User Flows</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.services}>
                <div style={{height: '40%'}}>
                <Typography variant="title" color="inherit" gutterBottom>04</Typography>
                <Typography variant="headline" color="inherit" gutterBottom>Agile Development Sprints</Typography>
                <Typography variant="body1" color="inherit" gutterBottom>Using Agile methodologies we work closely with the development team to create an MVP. We develop a feature roadmap with milestones and KPIs.</Typography>
                </div>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Scrum</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Frontend / Backend</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>App, Mobile, Web</Typography>
                <Typography style={{borderBottom: '1px solid #e7e7e7', paddingBottom:'10px', paddingTop:'20px'}} variant="body2" color="inherit" gutterBottom>Analytics</Typography>
              </Grid>
              <Grid item xs={1} sm={1} md={2} lg={2} xl={2}></Grid>
            </Grid>





        <Grid container className={classes.why}>
          <Grid container style={{paddingTop:'100px'}}>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} xl={4} style={{display:'flex', width:'100%', justifyContent:'center'}}>
              <Typography variant="title" style={{fontSize:'14px'}} color="inherit" gutterBottom align="center">
                HOW WE WORK
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
          </Grid>
          <Grid container style={{paddingBottom:'100px'}}>
            <Grid item xs={1} sm={1} md={1} lg={2} xl={3}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={8} xl={6} className={classes.why}>
              <Typography variant='headline' gutterBottom paragraph={true}>
                We run <strong>Design Sprints</strong> combined with <strong>Agile Development</strong> Sprints to form a Product Relay™. It’s our secret sauce and sets us apart from any other design/development teams you will work with.
              </Typography>
              <Paper style={{padding:'40px', background:'#F4F7FA'}}><Typography variant='headline' gutterBottom paragraph={true}>
              The <strong>Design Sprint</strong> is a proven methodology for solving problems through designing, prototyping, and testing ideas with users. Design Sprints quickly align teams under a shared vision with clearly defined goals and deliverables. Ultimately, it is a tool for developing a hypothesis, prototyping an idea, and testing it rapidly with as little investment as possible in as real an environment as possible.
            </Typography></Paper>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={2} xl={3}></Grid>
          </Grid>
          </Grid>

          <Grid container style={{paddingBottom:'100px'}} className={classes.process}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <img style={{margin:'0 auto', width:'100%', paddingBottom:'10%', paddingTop:'10%'}} src='/static/Academy_Our_Process_V2.png' />
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
          </Grid>

          <Grid container style={{paddingBottom:'100px'}} className={classes.spacing}>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} xl={4} style={{display:'flex', width:'100%', justifyContent:'center'}}>
              <Typography variant="title" style={{fontSize:'14px'}} color="inherit" gutterBottom align="center">
                WHY DESIGN SPRINTS?
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={1} sm={2} md={2} lg={2} xl={3}></Grid>
          <Grid item xs={12} sm={8} md={8} lg={8} xl={6} style={{display:'flex', width:'100%'}}>
            <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.services}>
              <Typography variant="headline" align="center" color="inherit" gutterBottom>Validate entirely new products</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.services}>
              <Typography variant="headline" align="center" color="inherit" gutterBottom>Validate new features on existing products</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.services}>
              <Typography variant="headline" align="center" color="inherit" gutterBottom>Improve existing product experiences</Typography>
            </Grid>
          </Grid>
          </Grid>
          <Grid item xs sm={1}></Grid>
        </Grid>

      <Grid container style={{paddingBottom:'100px'}} className={classes.why}>
        <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={10} sm={10} md={4} lg={4} xl={4} style={{display:'flex', width:'100%', justifyContent:'center'}}>
          <Typography variant="title" style={{fontSize:'14px'}} color="inherit" gutterBottom align="center">
            COMPANIES USING DESIGN SPRINTS
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
        <LogoGridSprints />
      </Grid>



          <Grid item xs={1} md={3} lg={4}></Grid>

          <Grid container className={classes.spacing}>
            <Grid container>
              <Grid item xs={1} sm={2} md={3} lg={4} xl={4}></Grid>
              <Hidden xsDown>
                <Grid item xs={10} sm={8} md={6} lg={4} xl={4}><div style={{borderLeft:'3px dashed lightgray', borderRight:'3px dashed lightgray', borderTop:'3px dashed lightgray', height:'30px'}}></div></Grid>
              </Hidden>
              <Grid item xs={1} sm={2} md={3} lg={4} xl={4}></Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={2} lg={2} xl={3}></Grid>
            <Grid item xs={10} sm={10} md={8} lg={8} xl={6}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card
                      backgroundColor='#f5f7fa'
                      title={'Design Sprints 101'}
                      headline1={'Research & Understanding'}
                      description1={'We map out the problems space and create a shared understanding.'}
                      headline2={'Sketch / Wireframe'}
                      description2={'Generate a broad range of ideas and narrow down to a select group. As a team determine what to prototype to answer your sprint questions.'}
                      headline3={'Design'}
                      description3={'Start creating a Design Language System and bring your product to life.'}
                      headline4={'Prototype'}
                      description4={'Build only what you need to validate your ideas in a very short time frame.'}
                      headline5={'Test / Validate'}
                      description5={'Test with real users to get valuable feedback and validate your hypothesis.'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Card
                      backgroundColor='#f9f4f5'
                      title={'Agile Sprints 101'}
                      headline1={'Plan'}
                      description1={'The team gathers product requirements, maps out API endpoints, Database schemas, feature prioritization, JIRA Epics etc.'}
                      headline2={'Build'}
                      description2={'Start building a shell of your product. All we need is an Minimum Viable Product.'}
                      headline3={'Test'}
                      description3={'We validate our beta launch with both quantative and qualitative data.'}
                      headline4={'Review'}
                      description4={'QA and implement any remaining changes based on user feedback.'}
                      headline5={'Launch'}
                      description5={'It’s go time. Let’s get our MVP into a beta and start building the rest of this experience.'}
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} md={2} lg={2} xl={3}></Grid>



          </Grid>


    </div>
    );
  }
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Process));
