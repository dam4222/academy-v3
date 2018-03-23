import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

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
      <Grid container spacing={24}>
        <Grid container>
          <Grid xs={6} sm={2}>
            <img src="#" />
          </Grid>
          <Grid xs={6} sm={2}>
            <h3>Workshops</h3>
          </Grid>
          <Grid xs sm={6}>
            <p>Join NYC{"'"}s top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.</p>
          </Grid>
          <hr></hr>
        </Grid>

        <Grid container>
          <Grid xs={6} sm={2}>
            <img src="#" />
          </Grid>
          <Grid xs={6} sm={2}>
            <h3>Bootcamps</h3>
          </Grid>
          <Grid xs sm={6}>
            <p>This two week bootcamp is built for product teams of 5-7 people. The bootcamp will be customized and centered around solving a real challenge your product is facing.</p>
          </Grid>
          <hr></hr>
        </Grid>

        <Grid container>
          <Grid xs={6} sm={2}>
            <img src="#" />
          </Grid>
          <Grid xs={6} sm={2}>
            <h3>Special Ops</h3>
          </Grid>
          <Grid xs sm={6}>
            <p>Our teams will work side by side running Design Sprints and building products that endure.</p>
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
