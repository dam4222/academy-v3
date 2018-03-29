import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap'
  }
});

function LatestNews(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={6}>
          <img src='#' />
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={6}>
          <Typography variant='display2'>
            Latest
          </Typography>
          <Typography variant='display1' gutterBottom>
            News
          </Typography>

        </Grid>
        <Grid item xs={1} sm={4}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={2} style={{borderRight:'1px solid #ede7e7', paddingRight:'40px'}}>
          <Typography variant='title' gutterBottom>
            Product Relays™
          </Typography>
          <br></br>
          <Typography variant='body1' gutterBottom>
          Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together.
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={10} sm={2} style={{borderRight:'1px solid #ede7e7', paddingRight:'40px'}}>
          <Typography variant='title' gutterBottom>
            Product Relays™
          </Typography>
          <br></br>
          <Typography variant='body1' gutterBottom>
          Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together.
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={10} sm={2} style={{borderRight:'1px solid #ede7e7', paddingRight:'40px'}}>
          <Typography variant='title' gutterBottom>
            Product Relays™
          </Typography>
          <br></br>
          <Typography variant='body1' gutterBottom>
          Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together.
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={10} sm={1}>
          <Button disableRipple={true} className={"underline"} href="/blog">
            <Typography variant="title" color="inherit">
              See More
            </Typography>
          </Button>

        </Grid>
      </Grid>
      </div>
    );
  }

LatestNews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestNews);
