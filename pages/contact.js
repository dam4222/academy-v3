import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import ContactHero from '../components/contactHero'
import Head from 'next/head';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function Contact(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Head>
          <title>Academy – Contact Us</title>
          <meta name="description" content="We are a Product Design Agency that runs Design Sprints and helps craft digital experiences that make complex products seem simple. We offer end-to-end Design, Development, Research, & Analytics as well as team based Training." />
        </Head>
        <ContactHero />
    </div>
    );
  }

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Contact));
