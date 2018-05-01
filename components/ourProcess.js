import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import { Parallax } from 'react-scroll-parallax';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap'
  }
});

function OurProcess(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>

      <Grid container>
        <Grid item xs={1} sm={3}></Grid>
        <Grid item xs={10} sm={6}>
          <Typography variant='display2'>
            Our Process
          </Typography>
          <Typography variant='display1' gutterBottom>
            is Collaborative
          </Typography>
        </Grid>
        <Grid item xs={1} sm={3}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={4}></Grid>
        <Grid item xs={10} sm={6}>
          <img width="100%"
          style={{
            paddingTop:'60px',
            paddingBottom:'60px'
          }}
          src='/static/product-relay.png'
          />
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={7}></Grid>
        <Grid item xs={10} sm={3}>
          <Typography variant='body1' gutterBottom>
          Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking and Our process is Product Relays™.
          </Typography>
          <Typography variant='body1' gutterBottom>
          We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is being heard.
          </Typography>
          <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/work">
            <Typography variant="button" color="inherit">
              Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
      </div>
    );
  }

OurProcess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurProcess);
