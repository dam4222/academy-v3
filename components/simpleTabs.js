import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import WorkshopCurriculum from '../assets/workshop-curriculum.svg';
import SwipeableViews from 'react-swipeable-views';
import Grid from 'material-ui/Grid';
import TouchRipple from 'material-ui/ButtonBase/TouchRipple';
import DesignBetter from '../assets/design-better.svg';
import InVisionLogoV from '../assets/invision-logo-pink-v3.svg';
import SkillsGrid from './skillsGrid.js'

TouchRipple.prototype.render = () => null;

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
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '100%',
    background:'#f5f5f5',
  },
  colorDefault: {
    backgroundColor: 'none !important',
  },
  flexContainer:{
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  indicator:{
    background:'transparent'
  },
  textColorPrimary:{
    color:'rgba(47, 47, 64, .2)',
    transition:'.65s ease all',
    borderLeft:'2px solid transparent'
  },
  label:{
    textAlign:'left',
    fontSize: 18,
    fontFamily:'Montserrat',
  },
  right:{
    float: 'right',
    maxWidth:'400px',
    paddingTop:'100px',
    paddingBottom:'100px'
  },
  selected:{
    borderLeft:'2px solid black'
  }
});

const verticalText = {
  transform: 'rotate(-90deg)',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      top: '30%',
      left: '-20%',
}

const verticalLogo = {
  transform: 'rotate(90deg)',
  position: 'relative',
  display: 'flex',
  marginLeft: '70px',
  marginRight: '30px',
}

class SimpleTabs extends React.Component {
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
      <Grid item xs={1} md={1} lg={2} xl={2}></Grid>
      <Grid item xs={10} md={7} lg={6} xl={4}>
        <Typography style={verticalText} variant="caption" color="secondary">
          PROUD PARTNERS OF <DesignBetter style={verticalLogo} /><InVisionLogoV style={verticalLogo}/>
        </Typography>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <img src="https://cdn1.academyux.com/workshop.jpg" className={classes.right} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <img src="https://cdn1.academyux.com/Bootcamp-curriculum.jpg" className={classes.right} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <SkillsGrid className={classes.right} />
          </TabContainer>
        </SwipeableViews>
        </Grid>

        <Grid item xs={10} md={4} lg={4} xl={4}
        style={{
          textAlign: 'left',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            classes={{
              flexContainer:classes.flexContainer,
              indicator:classes.indicator,
            }}
          >

            <Tab className={'tabHover'} classes={{textColorPrimary: classes.textColorPrimary, label:classes.label, root:classes.root, selected:classes.selected}}
            label={
              <div><h3>Workshops</h3>
              <p>Join top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.
              </p>
              </div>
            }/>
            <Tab className={'tabHover'} classes={{textColorPrimary: classes.textColorPrimary, label:classes.label, root:classes.root, selected:classes.selected}}
            label={
              <div><h3>Bootcamps</h3>
              <p>The leader-led bootcamp will train your team on how to run a Design Sprints start to finish. Our team of experts will instruct you every step of the way while working on a real problem your team is facing.
              </p>
              </div>
            }/>
            <Tab className={'tabHover'} classes={{textColorPrimary: classes.textColorPrimary, label:classes.label, root:classes.root, selected:classes.selected}}
            label={
              <div><h3>Embed w/ Team</h3>
              <p>If you are missing any skills on your team or are in need of some product leadership, we can help fill the gaps providing a range of services. We will work side-by-side with you and train your team along the way.</p>
              </div>
            }/>
            </Tabs>
        </Grid>
        <Grid item xs={1} md={1} lg={1} xl={2}></Grid>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SimpleTabs);
