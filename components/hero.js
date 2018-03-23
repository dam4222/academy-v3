import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: '540px'
  }
});

function Hero(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid item xs={1} sm={2}></Grid>
      <Grid item xs={10} sm={4} md={3}>
        <h1>Think Better, Build Better</h1><h2>with UX & Design Thinking</h2>
        <p>
        We are Designers, Developers. Product Managers, Researchers and Consultants devoted to creating human-centered digital experiences for our clients. We offer end-to-end Research, Design, Development & Analytics as well as Trainings for teams.
        </p>
      </Grid>
      <Grid item xs={1} sm={6}></Grid>
      </div>
    );
  }

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
