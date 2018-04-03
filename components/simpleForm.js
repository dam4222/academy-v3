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
import "../styles.scss"

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const spacing = {
  display:'flex',
  justifyContent: 'space-evenly',
}

export default class FormDialog extends React.Component {
  state = {
    open: false,
    multiline: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} disableRipple={true} className={"underline"} style={spacing}>
          <Typography variant="title" color="inherit">
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
              autoFocus
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
          </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} disableRipple={true} className={"underline"} style={spacing}>
            <Typography variant="title" color="inherit">
              Cancel
            </Typography>
          </Button>
          <Button onClick={this.handleClose} disableRipple={true} className={"underline"} style={spacing}>
            <Typography variant="title" color="inherit">
              Send
            </Typography>
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
