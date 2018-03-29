import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import WorkshopPanels from './workshopPanels';
import Typography from 'material-ui/Typography';



const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap'
  },
});

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
          <Typography variant='display1' gutterBottom>
            Workshops
          </Typography>

          <Button disableRipple={true} className={"underline"} href="/work">
            <Typography variant="title" color="inherit">
              See Our Workshops
          </Typography>
        </Button>
        </Grid>
        <Grid item xs sm={6}>
          <WorkshopPanels />
        </Grid>
      </Grid>
      </div>

    );
  }

OurWorkshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurWorkshops);
