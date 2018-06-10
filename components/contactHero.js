import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
const mailUrl = process.env.mailUrl;
import Snackbar from 'material-ui/Snackbar';

const styles = theme => ({
  root: {
    open: false,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: 'auto',
    paddingTop:'20vh',
    paddingBottom:'30vh',
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
  marginRight:'20px'
}

class ContactHero extends React.Component {

  state = {
    open: false,
    message: '',
    email: '',
    disabled: true,
    emailError: false,
    messageError: false,
    emailLabel: "Email Address",
    messageLablel: "Message",
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    //console.log(this.state)
  };

  verifyInput = () => {
    //@ in email id or . in email id
    if (this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
      this.setState({
        emailError: true,
        emailLabel: "Email Address is incorrect!"
      })
    } 
    else if (this.state.email.length - this.state.email.indexOf('.') < 1 || this.state.email.indexOf('.') - this.state.email.indexOf("@") < 2 ){
    // @ is before . and not before .
      this.setState({
        emailError: true,
        emailLabel: "Email Address is incorrect!"
      }) 
    }
    else if (this.state.email !== ""){
      this.sendMail()
    }
    //console.log(this.state)
  }

  sendMail = async () => {
    
    const body = {
      "email": this.state.email,
      "message": this.state.message,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    const res = await fetch(mailUrl, options);
    
    //if sending was successful, as status code is 200
    // Changing the state and showing snackbar
    res.status === 200 
    ?
    await this.setState({
      emailLabel: "Email Address",
      messageLablel: "Message",
      open: true,
    }) 
    : 
    await this.setState({
      emailLabel: "Error Occured. Try again!",
      messageLablel: "Error Occured. Try again!",
    })
  }

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
            label={this.state.emailLabel}
            type="email"
            value={this.state.email}
            onChange={this.handleChange('email')}
            fullWidth
            placeholder="Type your e-mail..."
            error={this.state.emailError}
          />
          <TextField
            id="name"
            label={this.state.messageLablel}
            multiline
            rows="4"
            value={this.state.message}
            onChange={this.handleChange('message')}
            margin="normal"
            fullWidth
            placeholder="Type your message..."
          />
          <Grid item xs={12} style={{display:'flex', flexDirection:'row'}}>
            <Button onClick={this.verifyInput} disableRipple={true} className={"underline"} style={spacing}>
              <Typography variant="title" color="inherit">
              Send
              </Typography>
            </Button> 
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={6}></Grid>

      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Message Sent!</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              CLOSE
            </Button>,
            
            
          ]}
        />
      </div>
    );
  }
}


ContactHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactHero);
