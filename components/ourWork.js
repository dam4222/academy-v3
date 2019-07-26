import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import LogoGrid from './logoGrid'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexWrap:'wrap',
    paddingTop: '100px',
    height:'auto',
    paddingBottom:'100px'
  },
});

function OurWork(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid container>
      <Grid item xs={1} sm={2}></Grid>
      <Grid item xs={10} sm={8} md={8} lg={8}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Typography variant='display2'>
              Our Work
            </Typography>
            <Typography variant='display1' gutterBottom>
              is Human Centered
            </Typography>
          </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="body1" color="inherit" gutterBottom>
            We run Design Sprints to take a user-centric approach to product design that helps transform products, services and strategies.
          </Typography>
          <Button disableRipple={true} style={{paddingTop:'10px', marginBottom:'40px'}} className={"underline"} href="/work">
            <Typography variant="button" color="inherit">
              See Our Work <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
            </Typography>
          </Button>
          <LogoGrid />
        </Grid>
        </Grid>
        </Grid>

        <Grid item xs={1} sm={2}></Grid>
        </Grid>
        </Grid>
        </Grid>
      </div>

    );
  }

OurWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurWork);
