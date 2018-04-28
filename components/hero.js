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
    height: '90vh'
  }
});

function Hero(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={10} sm={5} md={6} lg={5} xl={4}>
        <Typography variant='display4'>
          Think Better, Build Better
        </Typography>
        <Typography variant='display3' gutterBottom>
          with UX & Design Thinking
        </Typography>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography variant='body1' gutterBottom>
          We craft digital experiences that make complex products seem simple. We offer end-to-end Design, Development, Research, & Analytics as well as team based Training.
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
