import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import WorkshopCurriculum from '../assets/workshop-curriculum.svg';
import SwipeableViews from 'react-swipeable-views'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: 'none !important',
    width: '100%',
    background:'#f5f5f5',
  },
  center:{
    display: 'block',
    margin: 'auto',
    width: '100%',
    height:'auto',
    top:0,
    maxWidth:'500px'
  },
  colorDefault: {
    backgroundColor: 'none !important',
  }
});

class SimpleTabsMobile extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>

          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            fullWidth
          >
            <Tab label="Workshop" />
            <Tab label="Bootcamp" />
            <Tab label="Embed w/ Team" href="#basic-tabs" />
          </Tabs>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}

        >
          <TabContainer dir={theme.direction}>
            <WorkshopCurriculum className={classes.center} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <WorkshopCurriculum className={classes.center} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <WorkshopCurriculum className={classes.center} />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

SimpleTabsMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SimpleTabsMobile);
