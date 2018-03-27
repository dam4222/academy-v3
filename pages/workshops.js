import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'
import Paper from 'material-ui/Paper';
import SimpleTabs from '../components/simpleTabs';
import WorkshopCard from '../components/workshopCard';

const textStyles = {
  color: '#848484',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  centerAlign: {
    justifyContent:'center',
    display:'flex'
  },
  wrap: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
  }
});

function Workshops(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <Grid container spacing={8}>

          <Grid item xs={12} className={classes.centerAlign}>
            <img src="#" />
          </Grid>

          <Grid item xs={1} md={3} lg={4}></Grid>
          <Grid item xs={10} md={6} lg={4}>
            <Typography variant="display3" align="center" gutterBottom>
              Train Your
            </Typography>
            <Typography style={textStyles} variant="display3" align="center" gutterBottom>
              Teams
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
            We have worked with Agencies, Fortune 500 Companies, and Governments to deliver the top UX & Design Thinking experts in the field. We provide a range of consulting opportunities that are custom fit to your organization. Whether thats providing expertise in UX/UI Design, Research, Prototyping, Testing, Development, Product Management, and Analytics or training your teams with our Workshops and Bootcamps. We work right along side you acting as an extension to your internal team.
            </Typography>
          </Grid>
          <Grid item xs={1} md={3} lg={4}></Grid>

          <Grid container spacing={8} className={classes.wrap}>
            <Grid item xs={1} sm={1} md={2} lg={2}></Grid>
            <Grid item xs={10} sm={10} md={5} lg={3} xl={2}>
              <Typography variant="headline" align="left" gutterBottom>
                Workshops
              </Typography>
              <Typography variant="body1" align="left" gutterBottom>
                Join NYC{"'"}s top design leaders, project managers, developers, and innovators for a full-day workshop on mastering design sprints—led by sprint master Adam Perlis.
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
            <Grid item xs={10} sm={6} md={3} lg={5}>
              <img src="#" />
            </Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item xs sm md={3} lg={4}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <SimpleTabs />
            </Grid>
            <Grid item xs sm md={3} lg={4}></Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item xs sm md={1} lg={1} xl={3}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={3}>
              <WorkshopCard
              title={'DESIGN SPRINT WORKSHOP'}
              description={'In this jam-packed workshop, you’ll learn and master the tools, techniques, and framework used by teams at Google Ventures, Slack, Uber, and more, to facilitate breakthrough ideas, solve challenges, and validate solutions.'}
              month={'March'}
              day={'4'}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={3}>
              <WorkshopCard
              title={'DESIGN SPRINT WORKSHOP'}
              description={'In this jam-packed workshop, you’ll learn and master the tools, techniques, and framework used by teams at Google Ventures, Slack, Uber, and more, to facilitate breakthrough ideas, solve challenges, and validate solutions.'}
              month={'March'}
              day={'4'}
              />
            </Grid>
            <Grid item xs sm md={1} lg={1} xl={3}></Grid>
          </Grid>

      </Grid>
    </div>
    );
  }

Workshops.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Workshops));
