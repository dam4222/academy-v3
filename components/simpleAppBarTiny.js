import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SimpleDrawer from './simpleDrawer';
import Link from 'next/link'
import AcademyLogoSmall from '../assets/academy-logo-small.svg'
import AcademyLogo from '../assets/academy-logo.svg'
import AnimatedLogo from '../components/animatedLogo';
import AnimatedLogoSmall from '../components/animatedLogoSmall';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';
import Input from 'material-ui/Input';
import Icon from 'material-ui/Icon';
import "../styles.scss"
import Router from 'next/router';

const styles = theme => ({

});

const root = {
  display:'flex',
  flexFlow:'row wrap',
  width:'100%',
  position:'fixed',
  zIndex:9999999,
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

class SimpleAppBarTiny extends React.Component {

  handleSearch = event => {
    if (event.key === 'Enter' && event.target.value !== ''){
      Router.push({
        pathname: '/search',
        query: {
          keyword: event.target.value
        }
      })
    } 
  };

  render() {

  return (
    <div style={root}>

            <AppBar
            color="default"
            style={{background:'#fafafa', height:'60px', zIndex:'99999', position:'relative'}}
            className="tinyAppBar"
            >
              <Toolbar>
                  <Grid item xs={6} style={left}>
                    <IconButton className="iconLogo" disableRipple={true} href="/">
                        <AcademyLogoSmall />
                    </IconButton>
                  </Grid>

                  <Grid item xs={5} className='show' style={right}>
                    <Hidden smDown>
                      <Button className={`underline`} disableRipple={true} href="/work" style={spacing}>
                        <Typography variant="button" color="inherit">
                          Work
                        </Typography>
                      </Button>

                      <Button className={`underline`} disableRipple={true} href="/process" style={spacing}>
                        <Typography variant="button" color="inherit">
                          Our Process
                        </Typography>
                      </Button>

                      <Button className={`underline`} disableRipple={true} href="/workshops" style={spacing}>
                        <Typography variant="button" color="inherit">
                          Workshops
                        </Typography>
                      </Button>


                      <Button className={`underline`} disableRipple={true} href="/blog" style={spacing}>
                        <Typography variant="button" color="inherit">
                          Design Tinkering
                        </Typography>
                      </Button>
                    </Hidden>

                    <Input
                      id="searchKey"
                      name="searchKey"
                      placeholder="Search"
                      inputProps={{
                        'aria-label': 'Description',
                      
                      }}
                      onKeyPress={this.handleSearch}
                    />

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

SimpleAppBarTiny.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBarTiny);
