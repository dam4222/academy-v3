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
import ContactForm from '../components/ContactForm';
import "../styles.scss"

const styles = theme => ({

});

const root = {
  display:'flex',
  flexFlow:'row wrap',
  width:'100%',
  height: '167px',
  alignItems:'center',
  background: '#fafafa',
  position:'relative'
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
                <Grid container spacing={0}>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                  <Grid item xs={10} sm={11} md={5} lg={5} xl={5}>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <IconButton style={{width:'114px'}} disableRipple={true} href="/">
                        <AcademyLogo />
                    </IconButton>
                    <Typography style={{padding:'10px'}} variant="body2" color="secondary">
                      |
                    </Typography>
                    <Typography variant="body2" color="secondary" gutterBottom>
                      UX & Design Thinking Studio
                    </Typography>
                    </div>


                      <Grid item xs={12} sm={12} md={12} lg={9} xl={10}>
                        <Divider style={divider}/>
                        <Typography variant="title" style={{fontSize:9.5}} color="inherit">
                          130 GRAND ST. SUITE #3D | BROOKLYN, NY 11249
                        </Typography>
                      </Grid>
                  </Grid>
                  <Hidden mdUp><div style={{width:'100%', paddingTop:'15px'}}></div></Hidden>
                  <Grid item xs={11} sm={11} md={5} lg={5} xl={5} style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>

                      <Button disableRipple={true} className={"underline"} href="/about" style={spacing}>
                        <Typography variant="button" color="inherit">
                          About
                        </Typography>
                      </Button>

                      <Button disableRipple={true} className={"underline"} href="/blog" style={spacing}>
                        <Typography variant="button" color="inherit">
                          Blog
                        </Typography>
                      </Button>

                      <ContactForm />

                      </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                  </Grid>



    </div>
  );
}
}

SimpleAppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppFooter);
