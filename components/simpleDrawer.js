import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Link from 'next/link';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AcademyLogoWhite from '../assets/academy-logo-white-v2.svg';
import Medium from '../assets/medium.svg';
import Dribbble from '../assets/dribbble.svg';
import Twitter from '../assets/twitter.svg';
import LinkedIn from '../assets/linkedin.svg';
import Behance from '../assets/behance.svg';
import Close from '../assets/collapse.svg';
import SimpleForm from '../components/simpleForm'


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap',
  }
});

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
  marginLeft:'40px'
};

const transition1 = {
  background: 'lightgray',
  width: '100%',
  height: '100vh',
  position: 'relative',
  zIndex: -1,
  display:'block',
  transition: '650ms cubic-bezier(0.19, 1, 0.22, 1) all'
};

const transition2 = {
  background: 'gray',
  width: '100%',
  height: '100vh',
  position: 'relative',
  zIndex: -1,
  display:'block',
  transition: '650ms cubic-bezier(0.19, 1, 0.22, 1) all'
};

class SimpleDrawer extends React.Component {

  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Button disableRipple={true} onClick={this.toggleDrawer('top', true)}><Icon>short_text</Icon></Button>

        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)} transitionDuration={ 450 }>

          <div className={classes.root}>

          <Button className="pulse" style={{position:'fixed', width:'15px', top:'30px', right:'30px'}}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            <Close/>
        </Button>


          <Grid container style={{height:'100vh', display:'flex', alignItems:'center', background:'black', paddingTop:'40px'}}>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={10} md={4} className="showDrawer" style={{display: 'flex', flexDirection: 'column'}}>

            <Button disableRipple={true} href="/work" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'24px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                Work
              </Typography>
            </Button>

            <Button disableRipple={true} href="/process" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'24px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                Our Process
              </Typography>
            </Button>

            <Button disableRipple={true} href="/workshops" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'24px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                Workshops
              </Typography>
            </Button>

            <Button disableRipple={true} href="/blog" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'24px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                Design Tinkering
              </Typography>
            </Button>

            <Button disableRipple={true} href="/about" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'16px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                About Us
              </Typography>
            </Button>

            <Button disableRipple={true} href="https://angel.co/academy-5/jobs" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'16px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                Careers
              </Typography>
            </Button>

            <Button disableRipple={true} href="/contact" style={spacing}>
              <Typography variant="button" className={`underline-white`} style={{fontSize:'16px', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                Contact Us
              </Typography>
            </Button>

          </Grid>

          <Grid item xs={10} md={4} className="showDrawer" style={{display: 'flex', flexDirection: 'column', alignItems:'flex-end', textAlign:'right', flexWrap:'wrap'}}>
            <Button style={{width:'130px', height:'auto', paddingBottom:'20px'}} disableRipple={true} href="/">
                <AcademyLogoWhite style={{width:'100%'}}/>
            </Button>
            <Grid xs={8}>
              <Typography variant="headline" style={{fontSize:'16px', color:'#8b8b8b', paddingBottom:'20px'}}> UX & Design Thinking Studio </Typography>
              <Typography variant="title" style={{color:'#8b8b8b', paddingBottom:'20px'}}> 130 GRAND ST. SUITE #3D, BROOKLYN, NY 11249 </Typography>
            </Grid>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Button target="_blank" href="https://medium.com/@academyuxdesign" style={spacing}><Medium /></Button>
              <Button target="_blank" href="https://twitter.com/academyuxdesign" style={spacing}><Twitter /></Button>
              <Button target="_blank" href="https://www.linkedin.com/company/academy-ux-design-thinking-studio/" style={spacing}><LinkedIn /></Button>
              <Button target="_blank" href="#" style={spacing}><Dribbble /></Button>
              <Button target="_blank" href="#" style={spacing}><Behance /></Button>
            </div>

          </Grid>


          <Grid item xs={1} md={2}></Grid>
        </Grid>
        </div>
        </Drawer>
      </div>
    );
  }
}

SimpleDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleDrawer);
