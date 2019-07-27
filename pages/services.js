import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import Card from '../components/card'
import Browser from '../assets/skills/browser.svg'
import Calender from '../assets/skills/calendar.svg'
import Consulting from '../assets/skills/consulting.svg'
import Img from '../assets/skills/img.svg'
import Lab from '../assets/skills/lab.svg'
import MagnifyingGlass from '../assets/skills/magnifying-glass.svg'
import Star from '../assets/skills/star.svg'
import Stats from '../assets/skills/stats.svg'
import User from '../assets/skills/user.svg'
import DesignIcon from '../assets/design-icon.svg'
import Facilitation from '../assets/facilitation.svg'
import TrainingIcon from '../assets/training-icon.svg'
import ConsultingIcon from '../assets/consulting-icon.svg'
import StrategyIcon from '../assets/strategy_research.svg'
import StudioIcon from '../assets/studio-icon.svg'
import "../styles.scss"
import Plx from 'react-plx';
import scrollToComponent from 'react-scroll-to-component-ssr';
import Head from 'next/head';



const ParallaxData = [
  {
    start: 0,
    end: 1500,
    properties: [
      {
        startValue: 0,
        endValue: 300,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: .75,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      },
    ]
  },
];

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
  mission: {
    height:'auto',
    paddingTop:'40px'
  },
  skillGrid: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: 'linear-gradient(56deg, #ebeff5, #faf5f5)',
    position:'relative',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  content: {
    width: '100%',
    background: 'white',
    position: 'relative',
    height: '100%',
  },
  spacing:{
    paddingBottom:'100px',
  },
  skillItem:{
    width:'100%',
    height:'210px',
    background: 'rgba(255, 255, 255, .3)',
    textAlign: 'center',
    padding:'20px',
    margin:'0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
});


class Process extends React.Component {

  render() {

  const { classes } = this.props;

  function handleDelete() {

  }


  return (
      <div className={classes.root}>

      <Head>
        <title>Academy – Our Services</title>
        <meta name="description" content="We are a Product Design Agency with a Human-Centered Approach. We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles." />
      </Head>

      <Grid container style={{paddingTop: '150px'}}>

      <Grid container>
        <Plx
        className='MyAwesomeParallax'
        parallaxData={ ParallaxData } // your parallax effects, see beneath
        animateWhenNotInViewport={ true }
        style={{width:'100%'}}
        >
          <Grid container>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={10} sm={10} md={4} lg={4} xl={4} style={{display:'flex', width:'100%', justifyContent:'center', paddingBottom:'60px', paddingTop:'30px'}}>
              <Typography variant="headline" style={{fontSize:'24px'}} color="inherit" gutterBottom align="center">
                We’ve helped multiple clients design and innovate internally, using four approaches:
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={4} lg={4} xl={4}></Grid>
          </Grid>

      </Plx>
        </Grid>
        </Grid>

        <Grid container style={{paddingBottom:'100px'}}>
          <Grid item xs={1} sm={2} md={2} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={8} md={8} lg={10} xl={8} style={{display:'flex', width:'100%'}}>
          <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className={"services"}>
            {/*<div>
            <Chip
               label="Recommended"
               className={classes.chip}
               style={{backgroundColor:'black', color:'white'}}
               onDelete={handleDelete}
               deleteIcon={<Icon style={{fontSize:'14px', verticalAlign: 'middle', color: 'white'}}>done</Icon>}
             />
             </div>*/}
            <div style={{height:'45%'}}>
            <StrategyIcon style={{height:'100%'}} />
            </div>


            <Typography variant="headline" color="inherit" gutterBottom>Product Strategy & Research</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>We conduct research to frame your new or current products problems and help you develop a clear product roadmap with effective strategies to tackle issues and establish your goals.
</Typography>
            <Button onClick={() => scrollToComponent(this.Strategy, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See More <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className={"services"}>
            <div style={{height:'45%'}}>
            <DesignIcon />
            </div>

            <Typography variant="headline" color="inherit" gutterBottom>Product Design Services</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>We embed into your organization as your product team helping research, strategize, design, manage and test innovations.</Typography>
            <Button onClick={() => scrollToComponent(this.Design, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See More <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className={"services"}>
            <div style={{height:'45%'}}>
            <Facilitation />
            </div>

            <Typography variant="headline" color="inherit" gutterBottom>Design Sprint Facilitation</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>We help lead your team from concept through validation as your Design Sprint Facilitator.</Typography>
            <Button onClick={() => scrollToComponent(this.Facilitate, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See More <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className={"services"}>
            <div style={{height:'45%'}}>
            <TrainingIcon />
            </div>

            <Typography variant="headline" color="inherit" gutterBottom>Team-Based Training</Typography>

            <Typography variant="body1" color="inherit" gutterBottom>We run a brief, immersive workshops and bootcamps, training teams on how to run Design Sprints and the fundementals of UX and Design Thinking leading to your digital transformation.</Typography>
            <Button onClick={() => scrollToComponent(this.Training, { offset: 0, align: 'middle', duration: 1000, ease:'outExpo'})} disableRipple={true} className="underline" style={{paddingTop:'10px', marginBottom:'40px'}}>
              <Typography variant="button" color="inherit">
                See More <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>arrow_downwards</Icon>
              </Typography>
            </Button>
          </Grid>
        </Grid>
        </Grid>
      <Grid item xs={1} sm={2} md={2} lg={1} xl={2}></Grid>
    </Grid>

        <Grid container className={classes.content}>
          <Grid container style={{paddingTop:'70px', paddingBottom:'100px'}}>
            <Grid item xs sm={1} md={1} lg={2} xl={3}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={8} xl={6} className={classes.mission}>
                <Typography variant="headline" color="inherit" paddingBottom>
                  <strong>Human Centered Design</strong> has become fundamental to the success of digital products. In an increasingly competitive landscape, organizations are realizing they need to bring design teams in-house to be be closer to the products themselves.
                </Typography>
                <br></br>
                <Typography variant="headline" color="inherit">
                While teams move in-house that does not mean the Agency goes away, it just means we need to work differently together. After all Agencies can bring fresh ideas, top level talent and new approaches to problem solving. This means the model needs to shift so that Agencies can work closer to the product and side-by-side with the in-house teams, deeply embedded to ensure the success of a product and protect the clients investment.
                </Typography>
            </Grid>
            <Grid item xs sm={1} md={1} lg={2} xl={3}></Grid>
          </Grid>
          </Grid>

          <Grid container>
              <Grid item xs={0} sm={12} md={12} lg={7} xl={7}>
                <div
                style={{
                  background: `url(https://cdn1.academyux.com/wp-content/uploads/2018/12/28231846/whiteboarding.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat',
                  height: '100vh',
                  top: '0',
                  zIndex: -1,
                }}
                ></div>

              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

              <Grid item xs={10} sm={10} md={10} lg={3} xl={3} style={{alignItems: 'center', display: 'flex', marginTop:'40px', marginBottom:'40px'}}>
              <Grid container ref={(section) => { this.Strategy = section; }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{border:'1px dashed #3023ae', padding:'30px', margin: '1px'}}>
                  <Typography variant="headline" color="inherit" gutterBottom align="center">Product Strategy & Research</Typography>
                  <br></br>
                  <Typography variant="title" color="inherit" gutterBottom align="center">IN A NUTSHELL</Typography>
                  <Typography variant="body1" color="inherit" gutterBottom align="center">“Help us learn our areas of opportunity”</Typography>
                  <br></br>
                  <Typography variant="title" color="inherit" gutterBottom align="center">IN PRACTICE</Typography>
                  <Typography variant="body1" color="inherit" gutterBottom align="center">We conduct research to frame new or current products problems and help you develop a clear product roadmap with effective strategies to tackle issues and establish your goals.</Typography>
                  <br></br>
                  <Typography variant="title" color="inherit" gutterBottom align="center">DURATION</Typography>
                  <Typography variant="body1" color="inherit" gutterBottom align="center">2-3 Weeks</Typography>
                  <br></br>
                  <Typography variant="title" color="inherit" align="center">TASKS</Typography>
                  <Typography variant="body1" color="inherit" align="center">Stakeholder Interviews</Typography>
                  <Typography variant="body1" color="inherit" align="center">Usability Studies</Typography>
                  <Typography variant="body1" color="inherit" align="center">Competitive Audit</Typography>
                  <Typography variant="body1" color="inherit" align="center">Quantitative Analysis</Typography>
                  <Typography variant="body1" color="inherit" align="center">Personas</Typography>
                  <Typography variant="body1" color="inherit" align="center">Feature Audit</Typography>
                  <Typography variant="body1" color="inherit" align="center">User Insights Report</Typography>

                  <br></br>
                  <Button disableRipple={true} style={{padding:'20px', border:'1px solid black', display:"flex", justifyContent:'center'}} className="underline" href="/contact">
                  <Typography variant="button" color="inherit">
                    Contact Us <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_right</Icon>
                  </Typography>
                  </Button>
                </Grid>
                </Grid>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

          </Grid>


          <Grid container className="embed-team">
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
              <Grid item xs={10} sm={10} md={10} lg={3} xl={3} style={{alignItems: 'center', display: 'flex', marginTop:'40px', marginBottom:'40px'}}>
                <Grid container ref={(section) => { this.Design = section; }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{border:'1px dashed #3023ae', padding:'30px'}}>
                    <Typography variant="headline" color="inherit" gutterBottom align="center">Product Design Services</Typography>
                    <br></br>
                    <Typography variant="title" color="inherit" gutterBottom align="center">IN A NUTSHELL</Typography>
                    <Typography variant="body1" color="inherit" gutterBottom align="center">“Design for us”</Typography>
                    <br></br>
                    <Typography variant="title" color="inherit" gutterBottom align="center">IN PRACTICE</Typography>
                    <Typography variant="body1" color="inherit" gutterBottom align="center">We embed into your organization as your product team helping you strategize, design, prototype, test and validate your product with your users. We will provide UX Leadership, UX Researchers, Product Designers, and Product Managers.</Typography>
                    <br></br>
                    <Typography variant="title" color="inherit" gutterBottom align="center">DURATION</Typography>
                    <Typography variant="body1" color="inherit" gutterBottom align="center">As Needed</Typography>
                    <br></br>
                    <Typography variant="title" color="inherit" gutterBottom align="center">TASKS</Typography>

                    <Typography variant="body1" color="inherit" align="center">Map User Journeys</Typography>
                    <Typography variant="body1" color="inherit" align="center">Build Systems Architecture + User Flows</Typography>
                    <Typography variant="body1" color="inherit" align="center">Wireframe/Design</Typography>
                    <Typography variant="body1" color="inherit" align="center">Prototype</Typography>
                    <Typography variant="body1" color="inherit" align="center">Test</Typography>
                    <Typography variant="body1" color="inherit" align="center">Handoff</Typography>
                    <br></br>
                    <Button disableRipple={true} style={{padding:'20px', border:'1px solid black', display:"flex", justifyContent:'center'}} className="underline" href="/work">
                    <Typography variant="button" color="inherit">
                      See Work <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_right</Icon>
                    </Typography>
                    </Button>
                  </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

              <Grid item xs={0} sm={12} md={12} lg={7} xl={7}>

                {/*<div
                style={{
                  background: `url(https://cdn.dribbble.com/users/4859/videos/49/cuberto_showreel_dribbble_3.mp4)`,
                  backgroundSize: 'cover',
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat',
                  height: '100vh',
                  top: '0',
                  zIndex: -1,
                }}
                ></div>*/}
                <video autoPlay loop muted playsInline style={{height:"100vh"}}>
                <source src="https://cdn.dribbble.com/users/4859/videos/49/cuberto_showreel_dribbble_3.mp4" type="video/mp4"></source>
                </video>

                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

          </Grid>

      <Grid container>
          <Grid item xs={0} sm={12} md={12} lg={7} xl={7}>
            <div
            style={{
              background: `url(https://cdn1.academyux.com/wp-content/uploads/2018/12/28235945/workshop1.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat',
              height: '100vh',
              top: '0',
              zIndex: -1,
            }}
            ></div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

          <Grid item xs={10} sm={10} md={10} lg={3} xl={3} style={{alignItems: 'center', display: 'flex', marginTop:'40px', marginBottom:'40px'}}>
          <Grid container ref={(section) => { this.Facilitate = section; }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{border:'1px dashed #3023ae', padding:'30px', margin: '1px'}}>
              <Typography variant="headline" color="inherit" gutterBottom align="center">Design Sprint Facilitation</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">IN A NUTSHELL</Typography>
              <Typography variant="body1" color="inherit" gutterBottom align="center">“Help us learn by helping us do”</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">IN PRACTICE</Typography>
              <Typography variant="body1" color="inherit" gutterBottom align="center">We help lead your team from concept through validation as your Design Sprint Facilitator</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">DURATION</Typography>
              <Typography variant="body1" color="inherit" gutterBottom align="center">5 days</Typography>
              <br></br>

              <Typography variant="title" color="inherit" gutterBottom align="center">TASKS</Typography>
              <Typography variant="body1" color="inherit" align="center">Facilitate with an Impartial Voice</Typography>
              <Typography variant="body1" color="inherit" align="center">Conduct Design Thinking Exercises</Typography>
              <Typography variant="body1" color="inherit" align="center">Surface Key Opportunity Areas</Typography>
              <Typography variant="body1" color="inherit" align="center">Identify Key Problems/Scope</Typography>
              <Typography variant="body1" color="inherit" align="center">Wireframe/Design</Typography>
              <Typography variant="body1" color="inherit" align="center">Prototype</Typography>
              <Typography variant="body1" color="inherit" align="center">Test</Typography>

              <br></br>
              <Button disableRipple={true} style={{padding:'20px', border:'1px solid black', display:"flex", justifyContent:'center'}} className="underline" href="/contact">
              <Typography variant="button" color="inherit">
                Contact Us <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_right</Icon>
              </Typography>
              </Button>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

      </Grid>

      <Grid container className="embed-team">
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={3} xl={3} style={{alignItems: 'center', display: 'flex', marginTop:'40px', marginBottom:'40px'}}>
              <Grid container  ref={(section) => { this.Training = section; }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{border:'1px dashed #3023ae', padding:'30px'}}>
              <Typography variant="headline" color="inherit" gutterBottom align="center">Team-Based Training</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">IN A NUTSHELL</Typography>
              <Typography variant="body1" color="inherit" gutterBottom align="center">“Help us to design ourselves”</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">IN PRACTICE</Typography>
              <Typography variant="body1" color="inherit" gutterBottom align="center">Teams will learn Design Sprint Facilitation, UX, Product Design (UX/UI), Prototyping, Testing and Agile Development methodologies. We will recommend org structures, conduct interviews, staff teams, and implement processes.</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">DURATION</Typography>
              <Typography variant="body1" color="inherit" gutterBottom align="center">As Needed</Typography>
              <br></br>
              <Typography variant="title" color="inherit" gutterBottom align="center">BENEFITS</Typography>

              <Typography variant="body1" color="inherit" align="center">Training in Research, Design, Prototyping, Testing, Design Sprints and Design Thinking</Typography>
              <Typography variant="body1" color="inherit" align="center">How to get “Buy-In”</Typography>
              <Typography variant="body1" color="inherit" align="center">Interview/Hire Candidates</Typography>
              <Typography variant="body1" color="inherit" align="center">Lead Projects and Faciliate Sprints</Typography>
              <br></br>
              <Button disableRipple={true} style={{padding:'20px', border:'1px solid black', display:"flex", justifyContent:'center'}} className="underline" href="/workshops">
              <Typography variant="button" color="inherit">
                See Workshops <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_right</Icon>
              </Typography>
              </Button>
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

          <Grid item xs={0} sm={12} md={12} lg={7} xl={7}>

            <div
            style={{
              background: `url(https://cdn1.academyux.com/wp-content/uploads/2018/12/28235025/workshop9.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat',
              height: '100vh',
              top: '0',
              zIndex: -1,
            }}
            ></div>

            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

      </Grid>

          <Grid item xs={1} md={3} lg={4}></Grid>

            <Grid container spacing={8} className={classes.skillGrid} style={{flexWrap:'wrap-reverse'}} >
              <Grid item xs={1} sm={1} lg={1}></Grid>

              <Grid item xs={12} sm={8} md={6} lg={5} xl={4} style={{alignContent: 'center', display: 'flex', flexWrap:'wrap'}}>
                <Grid container spacing={8} style={{alignContent: 'center', justifyContent: 'center', display:'flex'}}>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Consulting style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      SPRINT FACILITATION
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Unbiased, Team Leader, Empathetic, Problem Solver
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                    <Paper elevation={0} className={classes.skillItem}>
                      <MagnifyingGlass style={{marginBottom:'20px'}} />
                      <Typography variant='title' gutterBottom paragraph={true}>
                        RESEARCH
                      </Typography>
                      <Typography variant='body2' gutterBottom paragraph={true}>
                        Stakeholder Interviews, Ethnographic Research, Personas, Journey Mapping, Testing
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Img style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      UX/UI DESIGN
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Sketch, Design Language Systems, Zeplin, Icons, Logos
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Lab style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      PROTOTYPING
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      InVision, Craft, UXPin, Framer, Flinto, Marvel, Principal, Keynote
                    </Typography>
                  </Paper>
                  </Grid>

                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Calender style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      PRODUCT MANAGEMENT
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Timelines, Budgets, JIRA, Stand Ups, SCRUM, Agile, Sprint Planning
                    </Typography>
                  </Paper>
                  </Grid>

                  <Grid item xs={6} sm={6} md={4}>
                  <Paper elevation={0} className={classes.skillItem}>
                    <Stats style={{marginBottom:'20px'}} />
                    <Typography variant='title' gutterBottom paragraph={true}>
                      BUSINESS ANALYTICS
                    </Typography>
                    <Typography variant='body2' gutterBottom paragraph={true}>
                      Google Analytics, Google PageSpeed Insights, Hotjar, SEO, Crazy Egg
                    </Typography>
                  </Paper>
                  </Grid>

                </Grid>
              </Grid>

              <Grid item xs={8} sm={8} md={2} style={{paddingBottom:'20px', paddingTop:'20px'}}>
                <Typography variant='display2'>
                  Our Areas
                </Typography>
                <Typography variant='display1' gutterBottom>
                  of Expertise
                </Typography>

                <Typography variant='body1' gutterBottom>
                  Our belief is that working with people from a diverse set of skills leads to building better products. Our religion is Design Thinking
                  and our process is collaborative, democratic, egoless and filled with empathy for your users.

                  We bring Designers, Engineers, Product Managers, UX Researchers and Decision Makers together early in the process so everyone feels like their voice is
                  being heard.
                </Typography>
              </Grid>

              <Grid item xs={1} sm={1} lg={1}></Grid>
            </Grid>

    </div>
    );
  }
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Process));
