import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import WorkshopPanels from './workshopPanels';
import Typography from 'material-ui/Typography';
import DesignBetter from '../assets/design-better.svg';
import { Parallax } from 'react-scroll-parallax';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexWrap:'wrap',
    paddingTop: '100px',
  },
});

const verticalText = {
  transform: 'rotate(-90deg)',
  position: 'relative',
  transformOrigin: 0,
  width: '100vh',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
}

const verticalLogo = {
  transform: 'rotate(90deg)',
  position: 'relative',
  display: 'flex',
  marginLeft: '70px',
}

function OurWorkshops(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={4}>
          <Typography variant='display2'>
            Our
          </Typography>
          <Typography variant='display1' style={{paddingBottom:'100px'}}>
            Workshops
          </Typography>
        </Grid>
        <Grid item xs sm={6}>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={1} sm={1}>
        <Typography style={verticalText} variant="caption" color="secondary">
          PROUD PARTNERS OF <DesignBetter style={verticalLogo} />
        </Typography>

        </Grid>
          <Grid item xs={10} sm={7}>
            <Grid container>
              <Grid item xs={10} sm={10} md={6}>
                <Parallax
                    className="custom-class"
                    offsetYMax={-20}
                    offsetYMin={10}
                    slowerScrollRate
                >

                  <img width='100%' style={{paddingBottom:'10px'}} src="https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2017/10/terrier-puppy.jpg?itok=Ppdi06hH&fc=50,50"/>

                </Parallax>

              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={4}>
                <Typography variant='headline' style={{paddingBottom:'20px'}}>
                  1 Day Workshop
                </Typography>
                <Typography variant='body1' gutterBottom>
                Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.
                </Typography>
                <Typography variant='body1' gutterBottom>
                We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is being heard.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'186px'}} disableRipple={true} className={"underline"} href="/work">
                  <Typography variant="button" color="inherit">
                    Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={10} sm={10} md={6}>
                <Parallax
                    className="custom-class"
                    offsetYMax={-20}
                    offsetYMin={10}
                    slowerScrollRate
                >

                  <img width='100%' style={{paddingBottom:'10px'}} src="https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2017/10/terrier-puppy.jpg?itok=Ppdi06hH&fc=50,50"/>

                </Parallax>

              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={4}>
                <Typography variant='headline' style={{paddingBottom:'20px'}}>
                  1 Day Workshop
                </Typography>
                <Typography variant='body1' gutterBottom>
                Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.
                </Typography>
                <Typography variant='body1' gutterBottom>
                We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is being heard.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'186px'}} disableRipple={true} className={"underline"} href="/work">
                  <Typography variant="button" color="inherit">
                    Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                  </Typography>
                </Button>
              </Grid>
            </Grid><Grid container>
              <Grid item xs={10} sm={10} md={6}>
                <Parallax
                    className="custom-class"
                    offsetYMax={-20}
                    offsetYMin={10}
                    slowerScrollRate
                >

                  <img width='100%' style={{paddingBottom:'10px'}} src="https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2017/10/terrier-puppy.jpg?itok=Ppdi06hH&fc=50,50"/>

                </Parallax>

              </Grid>
              <Grid item xs={1} sm={1} md={1}></Grid>
              <Grid item xs={10} sm={10} md={4}>
                <Typography variant='headline' style={{paddingBottom:'20px'}}>
                  1 Day Workshop
                </Typography>
                <Typography variant='body1' gutterBottom>
                Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.
                </Typography>
                <Typography variant='body1' gutterBottom>
                We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is being heard.
                </Typography>
                <Button style={{paddingTop:'10px', marginBottom:'186px'}} disableRipple={true} className={"underline"} href="/work">
                  <Typography variant="button" color="inherit">
                    Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
      </div>

    );
  }

OurWorkshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurWorkshops);
