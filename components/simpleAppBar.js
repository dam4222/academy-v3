import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SimpleDrawer from './simpleDrawer';
import Link from 'next/link'
import AcademyLogoSmall from '../assets/academy-logo-small.svg'
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    flexGrow: 1,
    display:'flex'
  },
  rightAlign:{
    flexFlow:'row wrap',
  }
};

const style = {
  background: 'none',
  borderRadius: 3,
  border: 0,
  height: 60,
  padding: '0 30px',
  boxShadow: 'none',
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" style={style}>
        <Toolbar>

          <IconButton href="/" className={classes.button}>
              <AcademyLogoSmall />
          </IconButton>

          <Button href="/work" className={classes.button}>
            <Typography variant="title" color="inherit">
              Work
            </Typography>
          </Button>

          <Button href="/process" className={classes.button}>
            <Typography variant="title" color="inherit">
              Our Process
            </Typography>
          </Button>

          <Button href="/workshops" className={classes.button}>
            <Typography variant="title" color="inherit">
              Workshops
            </Typography>
          </Button>

          <Button href="/blog" className={classes.button}>
            <Typography variant="title" color="inherit">
              Blog
            </Typography>
          </Button>

          <SimpleDrawer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
