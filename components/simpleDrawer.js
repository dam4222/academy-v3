import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Link from 'next/link'

const styles = {

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
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
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
