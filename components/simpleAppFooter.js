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
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import SimpleForm from '../components/simpleForm';

import "../styles.scss"

const styles = theme => ({

});

const root = {
  display:'flex',
  flexFlow:'row wrap',
  width:'100%',
  height: '167px',
  alignItems:'center',
  background: '#f5f5f5',
  paddingLeft: '30px',
  paddingRight:'30px',
  paddingTop:'20px',
  paddingBottom:'20px'
}

const left = {
  display:'flex',
  justifyContent: 'flex-start',
  alignItems:'center',
  flexFlow:'row wrap',
}

const right = {
  display:'flex',
  justifyContent: 'flex-end',
  alignItems:'center',
  flexFlow:'row wrap',
  textAlign:'center'
}

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
  marginRight: 40,
}


const divider = {
  width: '100%',
  marginBottom: '20px'
}

class SimpleAppFooter extends React.Component {

  render() {

  return (
    <div style={root}>
                <Grid container spacing={8}>
                  <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={left}>
                    <IconButton style={{width:'124px'}} disableRipple={true} href="/">
                        <AcademyLogo />
                    </IconButton>
                    <div style={{padding:'15px'}}>
                      <Typography variant="body2" color="secondary">
                        |
                      </Typography>
                    </div>
                    <Typography variant="body2" color="secondary" gutterBottom>
                      UX & Design Thinking Studio
                    </Typography>


                    <Grid item xs={12} sm={12} md={12} lg={9} xl={10}>
                      <Divider style={divider}/>
                      <Typography variant="title" color="inherit">
                        130 GRAND ST. SUITE #3D | BROOKLYN, NY 11249
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6} style={right}>

                      <Button disableRipple={true} className={"underline"} href="/about" style={spacing}>
                        <Typography variant="title" color="inherit">
                          About
                        </Typography>
                      </Button>

                      <Button disableRipple={true} className={"underline"} href="/blog" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Blog
                        </Typography>
                      </Button>

                      <SimpleForm />

                      </Grid>
                  </Grid>



    </div>
  );
}
}

SimpleAppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppFooter);
