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
import OnScroll from 'react-on-scroll';
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
  justifyContent: 'space-between',
  marginRight: 40,
}

class SimpleAppBar extends React.Component {

  state = {
		sticky: false,
	};

	setSticky = sticky => this.setState({ sticky });

  render() {

  const { sticky } = this.state;

  return (
    <div style={root}>

    <OnScroll
				className="section"
				triggers={[
					{ top: 50, bottom: -50, callback: visible => this.setSticky(visible) },
				]}
			>
            <AppBar

            color="default"
            className={`${sticky ? 'notscrolled' : 'scrolling'}`}
            >
              <Toolbar>
                  <Grid item xs={6} style={left}>
                    <IconButton className={`${sticky ? 'hide' : 'show'}`} style={{position: 'relative', left:0, width:'130px', height:'auto'}} disableRipple={true} href="/">
                        <AcademyLogoSmall />
                    </IconButton>
                    <IconButton className={`${sticky ? 'show' : 'hide'}`} style={{position: 'relative', left:'-75px', width:'130px', height:'auto'}} disableRipple={true} href="/">
                        <AcademyLogo />
                    </IconButton>
                  </Grid>

                  <Grid item xs={5} className={`${sticky ? 'hide' : 'show'}`} style={right}>
                    <Hidden smDown>
                      <Button className={`underline`} disableRipple={true} href="/work" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Work
                        </Typography>
                      </Button>

                      <Button className={`underline`} disableRipple={true} href="/process" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Our Process
                        </Typography>
                      </Button>

                      <Button className={`underline`} disableRipple={true} href="/workshops" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Workshops
                        </Typography>
                      </Button>


                      <Button className={`underline`} disableRipple={true} href="/blog" style={spacing}>
                        <Typography variant="title" color="inherit">
                          Blog
                        </Typography>
                      </Button>
                    </Hidden>

                  </Grid>

                  <Grid item xs={1}>
                    <SimpleDrawer style={spacing} />
                  </Grid>

              </Toolbar>
            </AppBar>
			</OnScroll>
    </div>
  );
}
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
