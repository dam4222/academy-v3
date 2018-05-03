import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Icon from 'material-ui/Icon';
import Link from 'next/link'
import Paper from 'material-ui/Paper';
import SimpleTabs from '../components/simpleTabs';
import QuoteCarousel from '../components/quoteCarousel';
import SimpleTabsMobile from '../components/simpleTabsMobile';
import WorkshopCard from '../components/workshopCard';
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
  wrap: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
  },
  fixed: {
    position:'fixed',
    top:0,
    height: '80vh',
    overflow:'hidden'
  },
  content: {
    width: '100%',
    marginTop: '80vh',
    background: 'white',
    position: 'relative',
    height: '100%',
  },
  imageContainer:{
    width:'400px',
    height:'430px',
    overflow: 'hidden'
  }
});

function Workshops(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    <Grid container className={classes.fixed} style={{display: 'flex', alignItems: 'center', background:'linear-gradient(119deg, #ebeff5, #faf5f5)'}}>

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
            Our
          </Typography>
          <Typography variant='display1' gutterBottom>
            Workshops
          </Typography>
        </Grid>
        <Grid item xs={1} sm={5}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={1} md={3} lg={4}></Grid>
        <Grid item xs={12} sm={10} md={7} lg={6} xl={6}>
          <div className={classes.imageContainer}>
          <img
          style={{
            paddingTop:'60px',
            paddingBottom:'60px',
            width:'1000px'
          }}
          src='/static/designbetter-class@2x.jpg'
          />
          </div>
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
            We have worked with Agencies, Fortune 500 Companies, and Governments to deliver the top UX & Design Thinking experts in the field.
          </Typography>
          <Typography variant='body1' gutterBottom paragraph={true}>
            We provide a range of consulting opportunities that are custom fit to your organization. Whether thats providing expertise in UX/UI Design, Research, Prototyping, Testing, Development, Product Management, and Analytics or training your teams with our Workshops and Bootcamps. We work right along side you acting as an extension to your internal team.
          </Typography>
          <Typography variant="button" color="inherit" style={{paddingTop:'20px'}}>
            See Our Offerings <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_downwards</Icon>
          </Typography>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>

          <Hidden lgUp>
            <SimpleTabsMobile />
          </Hidden>

          <Hidden mdDown>
            <SimpleTabs />
          </Hidden>

          <QuoteCarousel />

          <Grid container spacing={8}>
            <Grid item xs sm md={1} lg={1} xl={3}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={3}>
              <WorkshopCard
              title={'DESIGN SPRINT WORKSHOP'}
              description={'In this jam-packed workshop, you’ll learn and master the tools, techniques, and framework used by teams at Google Ventures, Slack, Uber, and more, to facilitate breakthrough ideas, solve challenges, and validate solutions.'}
              month={'March'}
              day={'4'}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={3}>
              <WorkshopCard
              title={'DESIGN SPRINT WORKSHOP'}
              description={'In this jam-packed workshop, you’ll learn and master the tools, techniques, and framework used by teams at Google Ventures, Slack, Uber, and more, to facilitate breakthrough ideas, solve challenges, and validate solutions.'}
              month={'March'}
              day={'4'}
              />
            </Grid>
            <Grid item xs sm md={1} lg={1} xl={3}></Grid>
          </Grid>
          </Grid>
    </div>
    );
  }

Workshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Workshops));
