import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';

const styles = {

};

class About extends React.Component {

  render() {
    return (
      <div>About Page</div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(About));
