import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import AboutHero from '../components/aboutHero'
import OurWork from '../components/ourWork'
import OurProcess from '../components/ourProcess'
import OurWorkshops from '../components/ourWorkshops'
import LatestNews from '../components/latestNews'
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
          <meta name="description" content="We are a Product Design Agency with a Human-Centered Approach. We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles." />
        </Head>

        <AboutHero />

    </div>
    );
  }

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(About));
