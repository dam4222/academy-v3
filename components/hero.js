import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: '100vh'
  }
});

function Hero(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid container>
      <Grid item xs={1} sm={3} md={3} lg={3} xl={3}></Grid>
      <Grid item xs={10} sm={5} md={6} lg={5} xl={4}>
        <Typography variant='display4'>
          Product Design Agency
        </Typography>
        <Typography variant='display3' gutterBottom>
          Human-Centered Approach
        </Typography>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
          <Typography variant='body1' gutterBottom>
          We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={6} md={3} lg={2} xl={5}></Grid>
      </Grid>
      </div>
    );
  }

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
