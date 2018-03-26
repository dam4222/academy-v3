import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'
import Hero from '../components/hero'
import OurWork from '../components/ourWork'
import OurProcess from '../components/ourProcess'
import OurWorkshops from '../components/ourWorkshops'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function Index(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <Grid container spacing={8}>
        <Grid item xs={12}>

          <Hero />

          <OurWork />

          <OurProcess />

          <OurWorkshops />

          </Grid>
      </Grid>
    </div>
    );
  }

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
