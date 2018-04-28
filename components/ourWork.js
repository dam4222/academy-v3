import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import LogoGrid from './logoGrid'
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexWrap:'wrap',
    paddingTop: '100px',
    height:'100vh'
  },
});

const paddingBottom = {
  paddingBottom:'15%'
}

function OurWork(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={1} sm={1} md={2} lg={3} xl={5}></Grid>
          <Grid item xs={10} sm={10} md={4} lg={3} xl={2}>
            <Typography variant='display2'>
              Our Work
            </Typography>
            <Typography variant='display1' gutterBottom>
              is Human Centered
            </Typography>
          </Grid>
          <Grid item xs sm md={5} lg={4} xl={3}></Grid>
          <Grid item xs={1} xl={1}></Grid>
        </Grid>

        <Grid item xs={1} sm={1} md={6} lg={6} xl={5}></Grid>

        <Grid item xs sm md={5} lg={4} xl={3}>
          <Typography variant="body1" color="inherit" gutterBottom>
            We are a UX & Design Thinking Studio that takes a User-Centric approach to design and development and helps transform organizations products, services, and strategies.
          </Typography>
          <Button disableRipple={true} style={{paddingTop:'10px', marginBottom:'40px'}} className={"underline"} href="/work">
            <Typography variant="button" color="inherit">
              See Our Work <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
            </Typography>
          </Button>
          <LogoGrid />
        </Grid>
        <Grid item xs sm md={1} lg={2} xl={2}></Grid>
      </div>

    );
  }

OurWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurWork);
