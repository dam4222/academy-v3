import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Link from 'next/link'
import Typography from 'material-ui/Typography';


const styles = {};

const spacing = {
  display:'flex',
  justifyContent: 'space-between',
  marginRight: 40,
};

const transition1 = {
  background: 'lightgray',
  width: '100%',
  height: '100vh',
  position: 'relative',
  zIndex: -1,
  display:'block',
  transition: '1s all'
};

const transition2 = {
  background: 'gray',
  width: '100%',
  height: '100vh',
  position: 'relative',
  zIndex: -1,
  display:'block',
  transition: '1s all'
};

class SimpleDrawer extends React.Component {

  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    return (
      <div>
        <Button onClick={this.toggleDrawer('top', true)}><Icon>short_text</Icon></Button>

        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >

          <Button href="/work" style={spacing}>
            <Typography variant="title" color="inherit">
              Work
            </Typography>
          </Button>

          <Button href="/process" style={spacing}>
            <Typography variant="title" color="inherit">
              Our Process
            </Typography>
          </Button>

          <Button href="/workshops" style={spacing}>
            <Typography variant="title" color="inherit">
              Workshops
            </Typography>
          </Button>


          <Button href="/blog" style={spacing}>
            <Typography variant="title" color="inherit">
              Blog
            </Typography>
          </Button>

          <div style={transition2}></div>
          <div style={transition1}></div>

          </div>
        </Drawer>
      </div>
    );
  }
}

SimpleDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleDrawer);
