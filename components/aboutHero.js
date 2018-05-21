import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: 'auto',
    paddingTop:'20vh',
    paddingBottom:'30vh',
  }
});

function Hero(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={10} sm={5} md={6} lg={5} xl={4}>
        <Typography variant='display4'>
          About
        </Typography>
        <Typography variant='display3' gutterBottom>
          Us
        </Typography>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography variant='body1' gutterBottom paragraph>
            Academy is a UX & Design Thinking Studio that believes that creating a culture of Human Centered Design in organizations can build a better world around us. We do this by bringing UX & Design Thinking into organizations to shift their mindset of Design so that together, we can design products, services, and strategies that matter.
          </Typography>
          <Typography variant='body1' gutterBottom>
            Founded in 2017 by Adam Perlis. He is the former Design/UX Director for TIME Magazine where he oversaw the redesign of TIME, Fortune and Money.com. His award-winning work has been featured on Awwwards, The FWA, and TechCrunch. He has been a Speaker at SXSW, Web Summit, Northside Festival, Fifteen Second Festival, and Tech Open Air. Working as both a designer and developer his diverse skill set includes UX/UI design, front-end and back-end development, 2D & 3D motion graphics, and video production. He also has served on the Rutgers University Design Thinking Advisory Board, DesignBetter.co Instructor, InVision Design Leadership Forum, Working Not Working Members Board, and as a guest lecturer at General Assembly.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={6}></Grid>
      </div>
    );
  }

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
