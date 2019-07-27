import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { Parallax } from 'react-scroll-parallax';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap',
    height:'auto'
  }
});

function OurProcess(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>

      <Grid container>
      <Grid item xs={1} sm={2}></Grid>
      <Grid item xs={10} sm={8} md={8} lg={8}>
        <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Typography variant='display2'>
            Our Process
          </Typography>
          <Typography variant='display1' gutterBottom>
            is Collaborative
          </Typography>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography variant='body1' gutterBottom>
          We bring Designers, Engineers, Product Managers, UX Researchers and other key decision makers together to engage in the design thinking process.
          </Typography>
          <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/process">
            <Typography variant="button" color="inherit">
              Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
            </Typography>
          </Button>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <img width="100%"
          style={{
            paddingTop:'60px',
            paddingBottom:'15%'
          }}
          src='/static/Academy_Our_Process_V2.png'
          />
        </Grid>
        <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
      </Grid>
      </div>
    );
  }

OurProcess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurProcess);
