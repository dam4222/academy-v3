import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'
import AboutHero from '../components/aboutHero'
import OurWork from '../components/ourWork'
import OurProcess from '../components/ourProcess'
import OurWorkshops from '../components/ourWorkshops'
import LatestNews from '../components/latestNews'
import Carousel from '../components/carousel'
import Head from 'next/head';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function About(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Head>
          <title>Academy – About Us</title>
          <meta name="description" content="Short Description here" />
        </Head>
        
        <AboutHero />

    </div>
    );
  }

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(About));
