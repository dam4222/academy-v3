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
          Think Better, Build Better
        </Typography>
        <Typography variant='display3' gutterBottom>
          with UX & Design Thinking
        </Typography>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Typography variant='body1' gutterBottom>
          We are a Digital Product Studio that craft's experiences that make complex products seem simple using UX & Design Thinking. We offer end-to-end Design, Development, Research/Testing, & Analytics as well as team based Training.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={6} md={3} lg={2} xl={5}></Grid>
      <Grid container style={{position: 'absolute', bottom: '-26px'}}>
        <Grid item xs={10} sm={8}></Grid>
        <Grid item xs={2} sm={4}>
          <div class="scroll-down" role="button" style={{opacity: '1', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
            <span></span>
          </div>
        </Grid>
      </Grid>
      </Grid>
      </div>
    );
  }

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
