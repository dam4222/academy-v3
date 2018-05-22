import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SimpleDrawer from './simpleDrawer';
import Link from 'next/link'
import Router from 'next/router'
import AcademyLogoSmall from '../assets/academy-logo-small.svg'
import AcademyLogo from '../assets/academy-logo.svg'
import AnimatedLogo from '../components/animatedLogo';
import AnimatedLogoSmall from '../components/animatedLogoSmall';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import "../styles.scss"

const styles = theme => ({

});

const root = {
  display:'flex',
  flexFlow:'row wrap',
  width:'100%',
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
  justifyContent: 'flex-end',
  marginRight: 40,
}

class SimpleAppBarTinyBack extends React.Component {

  handleClick() {
    Router.back()
  }

  render() {

  return (
    <div style={root}>
      {console.log(Router)}
            <AppBar
            color="default"
            style={{background:'#fafafa', height:'60px'}}
            className="tinyAppBar"
            >
              <Toolbar>
                  <Grid item xs={11} style={left}>
                    <IconButton className="iconLogo" disableRipple={true} href="/">
                        <AcademyLogoSmall />
                    </IconButton>
                    <IconButton onClick={this.handleClick}>arrow_back</IconButton>
                  </Grid>

                  <Grid item xs={1} style={spacing}>
                    <SimpleDrawer style={spacing} />
                  </Grid>

              </Toolbar>
            </AppBar>
    </div>
  );
}
}

SimpleAppBarTinyBack.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBarTinyBack);
