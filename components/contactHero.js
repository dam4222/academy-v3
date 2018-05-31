import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: 'auto',
    paddingTop:'20vh',
    paddingBottom:'30vh',
  }
});

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
  marginRight:'20px'
}

class ContactHero extends React.Component {

  state = {
    multiline: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={10} sm={5} md={6} lg={5} xl={4}>
        <Typography variant='display4'>
          Contact
        </Typography>
        <Typography variant='display3' gutterBottom>
          Us
        </Typography>
        <Typography variant="body1" paragraph>We can answer any questions you might have. Just send us a note and we will get back to you promptly.</Typography>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            placeholder="Type your e-mail..."
          />
          <TextField
            id="multiline-flexible"
            label="Message"
            multiline
            rows="4"
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            margin="normal"
            fullWidth
            placeholder="Type your message..."
          />
          <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
            <Button disableRipple={true} className={"underline"} style={spacing}>
              <Typography variant="title" color="inherit">
              Send
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={6}></Grid>
      </div>
    );
  }
}


ContactHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactHero);
