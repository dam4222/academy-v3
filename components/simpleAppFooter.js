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
import AcademyLogo from '../assets/academy-logo.svg'
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import "../styles.scss"

const styles = theme => ({

});

const root = {
  display:'flex',
  flexFlow:'row wrap',
  width:'100%',
  height: '167px',
}

const left = {
  display:'flex',
  justifyContent: 'flex-start',
}

const right = {
  display:'flex',
  justifyContent: 'flex-end',
}

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
  marginRight: 40,
}

class SimpleAppFooter extends React.Component {

  render() {

  return (
    <div style={root}>

            <AppBar color="default" position="static">
              <Toolbar>
                  <Grid item xs={6} style={left}>
                    <IconButton style={{width:'124px'}} disableRipple={true} href="/">
                        <AcademyLogo />
                    </IconButton>
                  </Grid>

                  <Grid item xs={6} style={right}>

                      <Button disableRipple={true} className={"underline"} href="/work" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Work
                        </Typography>
                      </Button>

                      <Button disableRipple={true} className={"underline"} href="/process" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Our Process
                        </Typography>
                      </Button>

                      <Button disableRipple={true} className={"underline"} href="/workshops" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Workshops
                        </Typography>
                      </Button>


                      <Button disableRipple={true} className={"underline"} href="/blog" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Blog
                        </Typography>
                      </Button>

                  </Grid>

              </Toolbar>
            </AppBar>
    </div>
  );
}
}

SimpleAppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppFooter);
