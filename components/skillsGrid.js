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
    background: 'white',
    textAlign: 'center',
    padding:'20px',
    margin:'0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});

function SkillsGrid(props) {
  const { classes } = props;
  return (

  <div className={classes.root}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10} className={classes.skillGrid} style={{flexWrap:'wrap-reverse', alignContent: 'center', justifyContent: 'center'}} >
        <Grid container spacing={8}>
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

  </div>
);
}

SkillsGrid.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillsGrid);
