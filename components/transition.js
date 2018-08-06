import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function Transition(props) {
  const { classes } = props;

    return (
      <div className="transition"></div>
    );
  }

Transition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transition);
