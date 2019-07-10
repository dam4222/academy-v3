import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
  paddingRight: '40px'
};

const spacingSocial = {
  display:'flex',
  justifyContent: 'space-between',
  paddingLeft: '40px'
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


          <Grid container style={{height:'100vh', display:'flex', alignItems:'center', background:'black'}}>
          <Grid item xs={1} md={1}></Grid>
          <Grid item xs={10} md={10}>
          <Grid container>
          <Grid item xs={12} md={6} className="showDrawer" style={{display: 'flex', flexDirection: 'column', position:'relative'}}>
            <Link  href="/work" prefetch>
              <Button disableRipple={true} style={spacing}>
                <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(1em + 1vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                  Work
                </Typography>
              </Button>
            </Link>

            <Link href="/services" prefetch>
              <Button disableRipple={true}  style={spacing}>
                <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(1em + 1vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                  Our Services
                </Typography>
              </Button>
            </Link>

            <Link href="/process" prefetch>
              <Button disableRipple={true}  style={spacing}>
                <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(1em + 1vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                  Our Process
                </Typography>
              </Button>
            </Link>

            <Link href="/workshops" prefetch>
              <Button disableRipple={true} style={spacing}>
                <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(1em + 1vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                  Workshops
                </Typography>
              </Button>
            </Link>

            <Link href="/blog" prefetch>
              <Button disableRipple={true} style={spacing}>
                <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(1em + 1vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'white'}} color="inherit">
                  Design Tinkering
                </Typography>
              </Button>
            </Link>

            <Grid container>
            <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
              <Link href="/about" prefetch>
                <Button disableRipple={true}  style={spacing}>
                  <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(.75em + .5vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'#8b8b8b'}} color="inherit">
                    About Us
                  </Typography>
                </Button>
              </Link>

              <Button disableRipple={true} href="https://angel.co/academy-5/jobs" style={spacing} target="_blank" rel="noopener">
                <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(.75em + .5vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'#8b8b8b'}} color="inherit">
                  Careers
                </Typography>
              </Button>

              <Link href="/contact" prefetch>
                <Button disableRipple={true}  style={spacing}>
                  <Typography variant="button" className={`underline-white`} style={{fontSize:'calc(.75em + .5vw)', lineHeight:'1.5', marginBottom:'30px', paddingBottom:'10px', color:'#8b8b8b'}} color="inherit">
                    Contact Us
                  </Typography>
                </Button>
              </Link>
            </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} className="showDrawer" style={{display: 'flex', flexDirection: 'column', alignItems:'flex-end', textAlign:'right', flexWrap:'wrap', position:'relative', justifyContent:'center'}}>
            <Button style={{width:'130px', height:'auto', paddingBottom:'20px'}} disableRipple={true} href="/">
                <AcademyLogoWhite style={{width:'100%'}}/>
            </Button>
              <Typography variant="headline" style={{fontSize:'16px', color:'#8b8b8b', paddingBottom:'20px'}}> Product Design Studio </Typography>
              <Typography variant="title" style={{color:'#8b8b8b', paddingBottom:'20px'}}> 147 MANHATTAN AVE. SUITE #3B | BROOKLYN, NY 11206 </Typography>
            <div style={{display:'flex', flexDirection:'row'}} className="social-icons">
              <Button target="_blank" rel="noopener" href="https://medium.com/@academyuxdesign" style={spacingSocial}><Medium /></Button>
              <Button target="_blank" rel="noopener" href="https://twitter.com/academyuxdesign" style={spacingSocial}><Twitter /></Button>
              <Button target="_blank" rel="noopener" href="https://www.linkedin.com/company/academy-ux-design-thinking-studio/" style={spacingSocial}><LinkedIn /></Button>
              <Button target="_blank" rel="noopener" href="#" style={spacingSocial}><Dribbble /></Button>
              <Button target="_blank" rel="noopener" href="#" style={spacingSocial}><Behance /></Button>
            </div>

          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={1} md={1}></Grid>
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
