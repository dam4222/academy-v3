import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'


const styles = theme => ({
  root: {
    width: '100%',
    height:'100%',
    background:'#e7e7e7'
  }
});

function Placeholder(props) {
  const { classes } = props;

    return (
      <div className={classes.root}></div>
    );
  }

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Placeholder);
