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

class SimpleAppBar extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleInitLoad)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleInitLoad = () => {
    if(window.scrollY > 50){
      this.setState({
        initLoad:false
      })
    }
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({
        sticky: true,
      })
    } else {
      this.setState({
        sticky: false,
      })
    }
  }

  state = {
		sticky: false,
    initLoad: true,
	};

	setSticky = sticky => this.setState({ sticky });

  render() {

  const { sticky } = this.state;

  return (
    <div style={root}>

    {/*<OnScroll
				className="section"
				triggers={[
					{ top: -100, bottom: 0, callback: visible => this.setSticky(visible) },
				]}
			>*/}

            <AppBar

            color="default"
            className={`${sticky ? 'scrolling' : 'notscrolled'}`}
            >
              <Toolbar disableGutters>
                  <Grid item xs={6} style={left}>
                    <IconButton className={this.state.initLoad ? 'hidden' : (`${sticky && !this.state.initLoad ? 'show' : 'hide'}`)} style={{position: 'absolute', left: '-50px', width:'130px', height:'auto'}} disableRipple={true} href="/">
                        <AcademyLogoSmall />
                    </IconButton>
                    <IconButton className={this.state.initLoad ? '' : (`${sticky && !this.state.initLoad ? 'hide' : 'show'}`)} style={{width:'130px', height:'auto'}} disableRipple={true} href="/">
                        <AcademyLogo />
                    </IconButton>
                  </Grid>

                  <Grid item xs={5} className='show' style={right}>
                    <Hidden smDown>
                      
                      <Link href="/work" prefetch>
                        <Button className={`underline`} disableRipple={true} style={spacing}>
                          <Typography variant="button" color="inherit">
                            Work
                          </Typography>
                        </Button>
                      </Link>
                      
                      <Link href="/process" prefetch>
                        <Button className={`underline`} disableRipple={true} style={spacing}>
                          <Typography variant="button" color="inherit">
                            Our Process
                          </Typography>
                        </Button>
                      </Link>

                      <Link href="/workshops" prefetch>
                        <Button className={`underline`} disableRipple={true} style={spacing}>
                          <Typography variant="button" color="inherit">
                            Workshops
                          </Typography>
                        </Button>
                      </Link>

                      <Link href="/blog" prefetch>
                        <Button className={`underline`} disableRipple={true} style={spacing}>
                          <Typography variant="button" color="inherit">
                            Design Tinkering
                          </Typography>
                        </Button>
                      </Link>
                    </Hidden>

                  </Grid>

                  <Grid item xs={1} style={spacing}>
                    <SimpleDrawer style={spacing} />
                  </Grid>

              </Toolbar>
            </AppBar>
			{/*</OnScroll>*/}
    </div>
  );
}
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
