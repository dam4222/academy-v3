import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import "../styles.scss";
const mailUrl = process.env.mailUrl;
import Snackbar from 'material-ui/Snackbar';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
}

export default class FormDialog extends React.Component {
  state = {
    snackbarOpen: false,
    open: false,
    message: '',
    email: '',
    disabled: true,
    emailError: false,
    messageError: false,
    emailLabel: "Email Address",
    messageLablel: "Message",
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  snackbarHandleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarOpen: false });
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
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    const res = await fetch(mailUrl, options);
    await this.setState({
      emailLabel: "Email Address",
      messageLablel: "Message",
      snackbarOpen: true,
    })
    //console.log(mailUrl, res);  
  }

  render() {
    return (
      <div style={spacing}>
        <Button onClick={this.handleClickOpen} disableRipple={true} className={"underline"} style={spacing}>
          <Typography variant="button" color="inherit">
            Contact Us
          </Typography>
        </Button>
        <Dialog
          transition={Transition}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Say Hello</DialogTitle>
          <DialogContent>
            <DialogContentText>
              We can answer any questions you might have. Just send us a note and we will get back to you promptly.
            </DialogContentText>
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
            id="multiline-flexible"
            label={this.state.messageLablel}
            multiline
            rows="4"
            value={this.state.message}
            onChange={this.handleChange('message')}
            margin="normal"
            fullWidth
            placeholder="Type your message..."
          />
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} disableRipple={true} className={"underline"} style={spacing}>
            <Typography variant="title" color="inherit">
              Cancel
            </Typography>
          </Button>
          <Button onClick={this.verifyInput} disableRipple={true} className={"underline"} style={spacing}>
            <Typography variant="title" color="inherit">
              Send
            </Typography> 
          </Button> <small> {this.state.errorMessage} </small>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarHandleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Message Sent!</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.snackbarHandleClose}>
              CLOSE
            </Button>, 
          ]}
        />
      </div>
    );
  }
}
