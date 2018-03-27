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
    flexGrow:1,
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Toolbar>

        <Grid item xs lg={4}>
          <IconButton href="#flat-buttons" className={classes.button}>
            <Link href="/">
              <AcademyLogoSmall />
            </Link>
          </IconButton>
        </Grid>

          <Grid item xs lg={8} className={classes.rightAlign}>
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
          </Grid>

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
