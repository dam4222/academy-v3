import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Index extends React.Component {

render() {
  return (
    <div className={styles.root}>
      <Grid container spacing={24}>

      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={4}>
        <h1>Think Better, Build Better</h1><br></br><h2>with UX & Design Thinking</h2>
        <p>
        We are Designers, Developers. Product Managers, Researchers and Consultants devoted to creating human-centered digital experiences for our clients. We offer end-to-end Research, Design, Development & Analytics as well as Trainings for teams.
        </p>
      </Grid>
      <Grid item xs={12} sm={2}></Grid>

      <Grid item xs={12} sm={10}>
        <h1>Our Work</h1><br></br><h2>is Human Centered</h2>
        <Link href="/work">
          <a>See Work</a>
        </Link>
      </Grid>

      <Grid item xs={12} sm={10}>
        <h1>Our Process</h1><br></br><h2>is Collaborative</h2>
        <Link href="/process">
          <a>See Process</a>
        </Link>
      </Grid>

      </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
