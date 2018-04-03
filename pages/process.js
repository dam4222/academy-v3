import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'
import Paper from 'material-ui/Paper';
import Card from '../components/card'
import SkillsGrid from '../components/skillsGrid'
import AgileSprint from '../assets/agile-sprint-t-imeline.svg'
import DesignSprint from '../assets/design-sprint-t-imeline.svg'

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

function Process(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <Grid container spacing={8}>

          <Grid item xs={12} className={classes.centerAlign}>
            <img src="#" />
          </Grid>

          <Grid item xs={1} md={3} lg={4}></Grid>
          <Grid item xs={10} md={6} lg={4}>
            <Typography variant="display3" align="center">
              Introducing
            </Typography>
            <Typography style={textStyles} variant="display3" align="center">
                Product Relays™
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
            Product Relays™ unify Design Sprints and Agile Developement Sprints into one fluid process. It’s our secret sauce and sets us apart from any other design/development teams you will work with. See the chart to right for an example of our flow.
            </Typography>
          </Grid>
          <Grid item xs={1} md={3} lg={4}></Grid>

          <Grid container spacing={8}>
            <Grid item xs={1} md={3} lg={1}></Grid>
            <Grid item xs={10} md={6} lg={10}>
              <Grid container spacing={8}>
                <Grid item xs={12} md={6} lg={6}>
                    <Card
                      title={'Design Sprints 101'}
                      headline1={'Research & Understanding'}
                      description1={'Where we map out the problems space and create a shared understanding.'}
                      headline2={'Sketch / Decide'}
                      description2={'Generate a broad range of ideas and narrow down to a select group. As a team determine what to prototype to answer your sprint questions.'}
                      headline3={'Design'}
                      description3={'Start creating a Design Language System and bring your product to life.'}
                      headline4={'Prototype'}
                      description4={'Build only what you need to validate your ideas in a very short time frame.'}
                      headline5={'Test / Validate'}
                      description5={'Test with real users to get valuable feedback and validate your hypothesis.'}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Card
                      title={'Agile Sprints 101'}
                      headline1={'Plan'}
                      description1={'Where the team gathers product requirments, maps out API endpoints, Database schemas, feature prioritization, JIRA Epics etc.'}
                      headline2={'Build'}
                      description2={'Start building a shell of your product. All we need is an Minimum Viable Product.'}
                      headline3={'Test'}
                      description3={'Be sure to include analytics tools in your build so that you can test with real metrics. We will want quantative and qualitative.'}
                      headline4={'Review'}
                      description4={'Let’s QA and implement any remaining changes based on user feedback.'}
                      headline5={'Launch'}
                      description5={'It’s go time. Let’s get our MVP into a beta and start building the rest of this experience.'}
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} md={3} lg={1}></Grid>

          <Grid container spacing={8}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} className={classes.centerAlign}>
              <DesignSprint />
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid item xs={10} md={10} lg={10} className={classes.centerAlign}>
              <AgileSprint />
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>
          </Grid>


            <Grid item xs={12} className={classes.wrap}>
              <Grid item xs={1} sm={1} lg={1}></Grid>

              <Grid item xs={10} sm={6} lg={6}>
                <SkillsGrid />
              </Grid>

              <Grid item xs={1}></Grid>
              <Grid item xs={1}></Grid>

              <Grid item xs sm={2} lg={2}>
                <Typography variant='display2'>
                  Our Skills
                </Typography>
                <Typography variant='display1' gutterBottom>
                  are On Point
                </Typography>

                <Typography variant='body1' gutterBottom>
                  Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking
                  and Our process is Product Relays™.

                  We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is
                  being heard.
                </Typography>
              </Grid>

              <Grid item xs={1} sm={1} lg={1}></Grid>
            </Grid>



      </Grid>
    </div>
    );
  }

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Process));
