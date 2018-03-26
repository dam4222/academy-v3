import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'

const styles = {

};

class Work extends React.Component {

  render() {
    return (
      <div>
      <h1>Work</h1>

      <Link href="/project">
        <a>Project 1</a>
      </Link>

      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Work));
