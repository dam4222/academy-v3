import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import LogoGrid from './logoGrid'
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap'
  },
});

function OurWork(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid item xs={1} sm={2}></Grid>
      <Grid item xs={10} sm={4}>
        <Typography variant='display2'>
          Our Work
        </Typography>
        <Typography variant='display1' gutterBottom>
          is Human Centered
        </Typography>

        <Button disableRipple={true} className={"underline"} href="/work">
          <Typography variant="title" color="inherit">
            See Our Work
          </Typography>
        </Button>

      </Grid>
      <Grid item xs sm={6}>
        <LogoGrid />
      </Grid>
      </div>

    );
  }

OurWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurWork);
