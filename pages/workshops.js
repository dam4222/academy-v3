import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import SimpleTabs from '../components/simpleTabs';
import QuoteCarousel from '../components/quoteCarousel';
import SimpleTabsMobile from '../components/simpleTabsMobile';
import DesignBetterH from '../assets/design-better-horizontal.svg';
import InVisionLogoH from '../assets/invision-logo-pink-horizontal-v3.svg';
import Head from 'next/head'


const textStyles = {
  color: '#848484',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    height:'auto'
  },
  hero:{
    alignItems: 'center',
    height: '100vh',
    display: 'flex'
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
});

function Workshops(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    <Head>
          <title>Academy – Workshops</title>
          <meta name="description" content="We provide a range of consulting opportunities that are custom fit to your organization. Whether thats providing expertise in UX/UI Design, Research, Prototyping, Testing, Development, Product Management, and Analytics or training your teams with our Workshops and Bootcamps. We work right along side you acting as an extension to your internal team." />
    </Head>

    <Grid container className={classes.hero}>

    <Grid item xs={12}>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={5}>
          <Typography variant='display2'>
            Our
          </Typography>
          <Typography variant='display1' gutterBottom style={{paddingBottom:'20px'}}>
            Workshops
          </Typography>
        </Grid>
        <Grid item xs={1} sm={5}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={1} md={3} lg={6} xl={6}>
          <Grid container>
          <Grid item xs={5} xl={5}></Grid>
          <Grid item xs={3} xl={3} style={{marginTop:'40px', borderLeft:'1px solid #e7e7e7', height:'40vh'}}></Grid>
        </Grid>
        </Grid>
        <Grid item xs={10} sm={10} md={7} lg={6} xl={4}>
          <Grid container style={{flexWrap:'nowrap'}}>
            <Grid item xs={12} md={6}>

                <div
                  style={{
                    background: `url(https://cdn1.academyux.com/designbetter-class.jpg)`,
                    backgroundSize: 'cover',
                    height: '50vh',
                    top: '0',
                    transform: 'translateY(0) translateX(-100px)',
                }}
                ></div>

              </Grid>
              <Grid item xs={12} md={6}>
                <div
                  style={{
                    background: `url(https://cdn1.academyux.com/stickies-blur@3x.jpg)`,
                    backgroundSize: 'cover',
                    height: '50vh',
                    transform: 'translateY(100px) translateX(-200px)',
                    zIndex: -1,
                  }}
                ></div>
                </Grid>
          </Grid>
        </Grid>
      <Grid item xs sm={1}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={1} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={3} sm={3} md={1} lg={1} xl={1}>
          <Typography variant="button" color="inherit" style={{paddingTop:'40px'}}>
            Read More <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_downwards</Icon>
          </Typography>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      </Grid>
      </Grid>

      <Grid container style={{height:'auto', paddingBottom:'200px', flexWrap:'wrap-reverse'}}>
        <Grid item xs={10} sm={10} md={7} lg={7} xl={7}>
            <Grid container style={{flexWrap:'nowrap'}}>
              <Grid item xs={12} md={6} xl={4}>

                 <div
                  style={{
                    background: `url(https://cdn1.academyux.com/survival-kit@2x.jpg)`,
                    backgroundSize: 'cover',
                    height: '50vh',
                    top: '0',
                    transform: ' translateX(-100px)',
                }}
                ></div>

                </Grid>
                <Grid item xs={12} md={6} xl={4}>

                  <div
                  style={{
                    background: `url(https://cdn1.academyux.com/process-stickies@2x.jpg)`,
                    backgroundSize: 'cover',
                    height: '50vh',
                    top: '0',
                    transform: 'translateY(100px) translateX(-200px)',
                    zIndex: -1,
                  }}
                  ></div>

                  </Grid>
            </Grid>
          </Grid>

        <Grid item xs={10} sm={10} md={3} lg={3} xl={3} style={{
          paddingTop:'60px',
          paddingBottom:'100px',
          paddingLeft:'30px'
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

          <Hidden mdUp>
            <Grid container>
            <Grid xs={1}></Grid>
            <Grid xs={10} sm={10}>
              <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                }}>
                  <Typography variant="caption" color="secondary" style={{textAlign:'center'}}>
                    PROUD PARTNERS OF <DesignBetterH style={{width:'50vh', marginBottom:'10px', marginTop:'10px'}}/><InVisionLogoH style={{width:'50vh'}} />
                  </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Grid>
            </Grid>
            <SimpleTabsMobile />
          </Hidden>

          <Hidden smDown>
            <SimpleTabs />
          </Hidden>

          <QuoteCarousel />

          {/*<Grid container spacing={8}>
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
            <Grid item xs={1} sm={1} md={1} lg={1} xl={3}></Grid>
          </Grid>*/}

    </div>
    );
  }

Workshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Workshops));
