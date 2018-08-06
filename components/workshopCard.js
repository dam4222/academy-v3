import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    flexWrap:'wrap',
    width:589
  },
});

class WorkshopCard extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Paper style={{ padding: 20 }} elevation={1}>

        <Grid container spacing={8}>
          <Grid item md={7} lg={7}>
            <Typography variant="title" align="left" gutterBottom>
              {this.props.title}
            </Typography>

            <Typography variant="body1" align="left" gutterBottom>
              {this.props.description}
            </Typography>
          </Grid>

            <Grid item md={5} lg={5}>
              <Grid container wrap={"wrap"} spacing={8}>
                <Typography variant="body2" align="left" gutterBottom>
                  {this.props.month}
                </Typography>
                <Typography variant="body2" align="left" gutterBottom>
                  {this.props.day}
                </Typography>
              </Grid>

              <IconButton aria-label="Delete" disabled color="primary">
                  <img src="#" />
              </IconButton>
            </Grid>

        </Grid>

      </Paper>
      </div>
    );
  }
}

WorkshopCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkshopCard);
