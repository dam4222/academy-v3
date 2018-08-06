import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class WorkshopPanels extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid container>
          <Grid item xs={6} sm={2}>
            <img src="#" />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant='headline'>
              Workshops
            </Typography>
          </Grid>
          <Grid item xs sm={6}>
            <Typography variant='body1'>
              Join NYC{"'"}s top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.
            </Typography>
          </Grid>
          <hr></hr>
        </Grid>

        <Grid container>
          <Grid item xs={6} sm={2}>
            <img src="#" />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant='headline'>
              Bootcamps
            </Typography>
          </Grid>
          <Grid item xs sm={6}>
            <Typography variant='body1'>
            This two week bootcamp is built for product teams of 5-7 people. The bootcamp will be customized and centered around solving a real challenge your product is facing.
            </Typography>
          </Grid>
          <hr></hr>
        </Grid>

        <Grid container>
          <Grid item xs={6} sm={2}>
            <img src="#" />
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography variant='headline'>
              Embed w/ Team
            </Typography>
          </Grid>
          <Grid item xs sm={6}>
            <Typography variant='body1'>
              Our teams will work side by side running Design Sprints and building products that endure.
            </Typography>
          </Grid>
          <hr></hr>
        </Grid>
      </Grid>
      </div>
    );
  }
}

WorkshopPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkshopPanels);
