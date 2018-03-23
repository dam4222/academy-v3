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
    flexWrap:'wrap'
  }
});

function OurProcess(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={6}>
          <img src='#' />
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={6}>
          <h1>Our Process</h1><br></br><h2>is Collaborative</h2>
          <Link href="/process">
            <a>See Our Process</a>
          </Link>
        </Grid>
        <Grid item xs={1} sm={4}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={6}>
          <p>Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.<br></br>We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is being heard.
          </p>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
      </div>
    );
  }

OurProcess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurProcess);
