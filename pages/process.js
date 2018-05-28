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
import "../styles.scss"
import { Parallax } from 'react-scroll-parallax';



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

      <Grid container className={classes.fixed} style={{display: 'flex', alignItems: 'center', background:'linear-gradient(119deg, #ebeff5, #faf5f5)', paddingTop: '60px'}}>

      <Grid container>
      <Parallax
          className="custom-class"
          offsetYMax={100}
          offsetYMin={-100}
          slowerScrollRate={false}
      >

        <Grid container>
          <Grid item xs={1} sm={2}></Grid>
          <Grid item xs={10} sm={5}>
            <Typography variant='display2'>
              Introducing
            </Typography>
            <Typography variant='display1' gutterBottom>
              Product Relays ™
            </Typography>
          </Grid>
          <Grid item xs={1} sm={5}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={1} sm={1} md={3} lg={4}></Grid>
          <Grid item xs={12} sm={10} md={7} lg={6} xl={6}>
            <img width="100%"
            style={{
              paddingTop:'60px',
              paddingBottom:'60px',
              maxWidth:'100%'
            }}
            src='https://cdn1.academyux.com/product-relay.png'
            />
          </Grid>
        <Grid item xs sm={1}></Grid>
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

        </Parallax>
        </Grid>
        </Grid>

        <Grid container className={classes.content}>
        <Grid container>
          <Grid item xs={1} sm={7}></Grid>
          <Grid item xs={10} sm={3} style={{
            paddingTop:'60px',
            paddingBottom:'100px'
          }}>
            <Typography variant='body1' gutterBottom paragraph={true}>
              <strong>Product Relays™</strong> unify Design Sprints and Agile Developement Sprints into one fluid process.
            </Typography>
            <Typography variant='body1' gutterBottom paragraph={true}>
              It’s our secret sauce and sets us apart from any other design/development teams you will work with. See the above graphic for an example of our flow.
            </Typography>
            <Typography variant='body1' gutterBottom >
            We are not an Agency, we are a UX & Design Thinking Studio. We take a collaborative, democratic and data-driven approach to design. You can learn more about our process below.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2}></Grid>
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
            <Grid item xs={1} sm={1} md={2} lg={3} xl={3}></Grid>
            <Grid item xs={10} sm={10} md={8} lg={6} xl={6}>
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
          <Grid item xs={1} sm={1} md={2} lg={3} xl={3}></Grid>

          <Hidden mdDown>
          <Grid container spacing={8} className={classes.spacing}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} className={classes.centerAlign}>
              <img src="https://cdn1.academyux.com/Design-Sprint-Timeline.jpg"  style={{width:"100%", height:"100%", maxWidth:'80%'}}/>
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>

          <Grid container spacing={8} className={classes.spacing}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} className={classes.centerAlign}>
              <img src="https://cdn1.academyux.com/Agile-Sprint-Timeline.jpg" style={{width:"100%", height:"100%", maxWidth:'80%'}} />
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>
          </Hidden>

          <Hidden lgUp>
          <Grid container spacing={8} style={{paddingBottom:'20px'}}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} className={classes.centerAlign}>
              <img src="https://cdn1.academyux.com/Design-Sprint-Timeline-Mobile.jpg"  style={{width:"100%", height:"100%", maxWidth:'400px'}}/>
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>

          <Grid container spacing={8} className={classes.spacing}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} className={classes.centerAlign}>
              <img src="https://cdn1.academyux.com/Agile-Sprint-Timeline-Mobile.jpg" style={{width:"100%", height:"100%", maxWidth:'400px'}} />
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>
          </Hidden>


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
              <Grid item xs={9} sm={10} md={2} style={{paddingBottom:'20px', paddingTop:'20px'}}>
                <Typography variant='display2'>
                  Our Skills
                </Typography>
                <Typography variant='display1' gutterBottom>
                  are On Point
                </Typography>

                <Typography variant='body1' gutterBottom>
                  Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking
                  and Our process is Product Relays™.

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
