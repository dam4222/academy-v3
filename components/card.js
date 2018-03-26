import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    flexWrap:'wrap'
  },
});

class Card extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Paper style={{ padding: 20 }} elevation={1}>

        <Typography variant="title" align="left" gutterBottom>
          {this.props.title}
        </Typography>

        <Typography variant="headline" align="left" gutterBottom>
          {this.props.headline1}
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          {this.props.description1}
        </Typography>

        <Typography variant="headline" align="left" gutterBottom>
          {this.props.headline2}
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          {this.props.description2}
        </Typography>

        <Typography variant="headline" align="left" gutterBottom>
          {this.props.headline3}
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          {this.props.description3}
        </Typography>

        <Typography variant="headline" align="left" gutterBottom>
          {this.props.headline4}
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          {this.props.description4}
        </Typography>

        <Typography variant="headline" align="left" gutterBottom>
          {this.props.headline5}
        </Typography>
        <Typography variant="body1" align="left" gutterBottom>
          {this.props.description5}
        </Typography>
      </Paper>
      </div>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
