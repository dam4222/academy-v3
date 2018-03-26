import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';

const styles = {

};

class Project extends React.Component {

  render() {
    return (
      <div>Project Template</div>
    );
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Project));
