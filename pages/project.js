import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import  LinearProgress  from '@material-ui/core/LinearProgress';
import { Parallax } from 'react-scroll-parallax';
import Plx from 'react-plx';
import Head from 'next/head'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Error from 'next/error';
import SimpleForm from '../components/simpleForm';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;

const ParallaxData = [
  {
    start: 0,
    end: 3000,
    properties: [
      {
        startValue: 0,
        endValue: 300,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: 1.25,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      }
    ]
  },
];

const styles = theme => ( {
  root:{
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  content: {
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  spacer: {
    width: 'calc(100% + 16px)',
    margin: '-8px',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:'100px',
    paddingBottom:'100px',
  },
  process:{
    paddingBottom: '10vh',
    paddingTop: '10vh',
    height:'auto',
    display:'flex',
    alignItems:'center'
  },
  verticalLine:{
    display:'flex',
    justifyContent:'center',
    width:'2px',
    height:'100%',
    background:'#dadada'
  },
  spacerNextProject:{
    width: 'calc(100% + 16px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectLegend: {
    display:'inline-block',
  },
  contentCenter:{
    display: 'flex',
    alignItems: 'center',
    textAlign:'left',
    paddingBottom: '50px',
    paddingTop: '50px',
    justifyContent: 'flex-start',
  },
});

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
      dialogOpen: false,
    };
  }

  //fetch details of the project here
  static async getInitialProps(nextProps){


    let path = nextProps.asPath
    path = path.substr(9);

    const url = 'https://' + fetchUrl + '/wp-json/wp/v2/projects?slug=' + path;
    const res = await fetch(url)
    const project = await res.json()

    const url2 = 'https://' + fetchUrl + '/wp-json/wp/v2/projects';
      const res2 = await fetch(url2)
      const moreProjects = await res2.json()
    if (( !("password" in nextProps.query) && project[0].acf.password === '')
      ||
      (nextProps.query.password === project[0].acf.password)
    ){
      //fetch more projects to display at the end

      return{
        currProject: project[0].slug,
        project: project[0].acf,
        fetching: false,
        bgColor: project[0].acf.project_theme_color,
        moreProjects: moreProjects,
        projectPassword: project[0].acf.password,
      }
    }

    return {
      error: true,
      projectPassword: project[0].acf.password,
      currProject: project[0].slug,
      project: project[0].acf,
      fetching: false,
      bgColor: project[0].acf.project_theme_color,
      moreProjects: moreProjects,
      projectPassword: project[0].acf.password,
    }
  }

  openDialog = () => {
    this.state.dialogOpen ? null :
    this.setState({
      dialogOpen: true,
    })
  }

  handleClose = () => {
    this.setState({ dialogOpen: false });
  }

  setPassword = event => {
    this.setState({
      inputPassword: event.target.value
    })
  }

  verifyPassword = () =>{
    if (this.state.inputPassword == this.props.projectPassword){

      Router.push({
        pathname: '/project',
        query: {
          password: this.state.inputPassword,
        },
      },
      `/project?${this.props.currProject}`).then(() => window.scrollTo(0, 0));
    }
    else{

      this.setState({
        errorMessage: 'The password you attempted is incorrect. Please request access below and we will get back to you shortly.'
      })
    }
  }

  handleClick() {
    Router.push({
    pathname: '/work',
    })
  }

  componentWillMount = () => {
    this.props.error ? this.openDialog() : null

  }

  render() {
    const { classes } = this.props;
    if (this.props.error){

      return(
        <div >
        <Error statusCode={403} />
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Top Secret Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide a passsword to view this project.
              <br /><span style={{color: 'red'}}>
              {this.state.errorMessage}
                </span>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.setPassword}
            />
          </DialogContent>
          <DialogActions>
            <Button href="/work" disableRipple={true} style={{position:'relative', left:'-65px', minHeight: '0px', display: 'inline-flex', justifyContent:'flex-start'}}>
              <Icon style={{verticalAlign:'middle'}}>chevron_left</Icon>
              <Typography className={"underline"} variant="button" color="inherit">
              Back
              </Typography>
            </Button>
            <SimpleForm title='Request Access'/>
            <Button style={{marginLeft:'20px', marginRight:'20px'}} onClick={this.verifyPassword} disableRipple={true} className={"underline"}>
              <Typography variant="button" color="inherit">
              Submit
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>


        </div>
      )
    }
    return (
      <div className={classes.root} style={{backgroundColor: this.props.bgColor}}>

        <div>
          <Head>
            <title>Academy – {this.props.project.client_name + " – " +  this.props.project.project_title}</title>
            <meta name="description" content={this.props.project.project_description}/>
          </Head>

        <Grid container className="project" style={{height: '100vh'}}>

          <Grid item xs={12} md={3} style={{ zIndex: 999, backgroundColor: 'white', padding:'40px', position:'absolute', top:'25%', left:'5%' }}>
            <div className={classes.projectLegend}><IconButton className="arrowBack" style={{top:'-57px', left:'-19px', transform:'scale(.5)'}} onClick={this.handleClick}><Icon>chevron_left</Icon></IconButton></div>
            <div className={classes.projectLegend}>
              <Typography variant="title" color="secondary" className={classes.projectLegend}>
                Client &nbsp;
              </Typography>
              <Typography variant="title" color="primary" className={classes.projectLegend}>
                {this.props.project.client_name}
              </Typography>
            </div>
            <div className={classes.subLegend}>
              <Typography variant="display2" color="inherit">
                {this.props.project.project_title}
              </Typography>
            </div>
            <Typography variant="button" color="inherit" style={{paddingTop:'20px'}}>
              Read More <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_downwards</Icon>
            </Typography>
          </Grid>

          <Grid item xs={12} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Grid container className="project" style={{height:'100vh'}}>
              <Grid item xs={12} md={12} style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
              <Plx
              style={{bottom:0, position:'relative'}}
              className='project-hero'
              parallaxData={ ParallaxData } // your parallax effects, see beneath
              animateWhenNotInViewport={ true }
              >
                <Grid item xs={12} md={12} style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                  <img width="95%"
                  style={{
                    maxWidth:'100%',
                  }}
                  src={this.props.project.featured_image}
                  alt="featured image"
                  />
                </Grid>

              </Plx>
              </Grid>
              </Grid>
          </Grid>
          </Grid>


        <Grid container className={classes.content}>

            <Grid container spacing={16} style={{background:'white'}}>
              <Grid item xs={1} md={3}></Grid>

              <Grid item xs={10} md={6}>
                <Grid container justify="space-between" className={classes.spacer}>
                <Grid item xs={10} md={6}>
                  <Typography variant="body1" style={{fontSize:'calc(1em + .25vw)'}} gutterBottom paragraph>
                    {this.props.project.project_description}
                  </Typography>
                  <Typography variant="button" paragraph>
                    <a href={this.props.project.link} target="_blank" rel="noopener" className="underline" style={{textDecoration: 'none', color:'black'}}>
                      Visit Site <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>chevron_right</Icon>
                    </a>
                  </Typography>
                </Grid>

                <Grid item xs={10} md={4}></Grid>
                <Grid item xs={10} md={2} style={{display: 'flex', flexDirection:'column'}}>
                  <Typography variant="button" paragraph>
                    <a href="#section-one" className="underline" style={{textDecoration: 'none', color:'rgba(0, 0, 0, .5)'}}>
                      01   —   {this.props.project.section_1_title}
                    </a>
                  </Typography>
                  <Typography variant="button" paragraph>
                  <a href="#section-two" className="underline" style={{textDecoration: 'none', color:'rgba(0, 0, 0, .5)'}}>
                      02   —   {this.props.project.section_2_title}
                    </a>
                  </Typography>
                  <Typography variant="button" paragraph gutterBottom>
                    <a href="#section-three" className="underline" style={{textDecoration: 'none', color:'rgba(0, 0, 0, .5)'}}>
                      03   —   {this.props.project.section_3_title}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={1} md={3}></Grid>
            </Grid>

            <Grid container style={{backgroundColor: this.props.bgColor}}>
              <Grid container spacing={8} id="section-one" className={classes.process}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                  <Grid container>
                    <Grid item xs={10} sm={12} md={4} lg={4}>
                      <Typography variant="body1" >
                        <b>{this.props.project.section_1_title}</b>. {this.props.project.section_1_description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={2}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={6}>
                          <div className="sectionImg" dangerouslySetInnerHTML={{__html: this.props.project.section_1_media}}></div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} md={3}></Grid>
              </Grid>

              <Grid container spacing={8} id="section-two" className={classes.process}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                  <Grid container style={{flexWrap: 'wrap-reverse'}}>

                      <Grid item xs={12} sm={12} md={4} lg={6}>
                        <div className="sectionImg" dangerouslySetInnerHTML={{__html: this.props.project.section_2_media}}></div>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={2}></Grid>
                      <Grid item xs={10} sm={12} md={4} lg={4}>
                        <Typography variant="body1">
                          <b>{this.props.project.section_2_title}</b>. {this.props.project.section_2_description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                <Grid item xs={1} md={3}></Grid>
              </Grid>

              <Grid container spacing={8} id="section-three" className={classes.process}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                  <Grid container>
                    <Grid item xs={10} sm={12} md={4} lg={4}>
                      <Typography variant="body1" >
                        <b>{this.props.project.section_3_title}</b>. {this.props.project.section_3_description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={2}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={6}>
                      <div className="sectionImg" dangerouslySetInnerHTML={{__html: this.props.project.section_3_media}}></div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} md={3}></Grid>
              </Grid>
            </Grid>

            <Grid container spacing={16} justify="space-between" className={classes.spacer} style={{background:'white'}}>
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={10} md={10}>
                <Grid container>
                  <Grid item xs={6} md={3} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.props.project.flow_image_1} alt="flow-image-1" />
                  </Grid>
                  <Grid item xs={6} md={3} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.props.project.flow_image_2} alt="flow-image-1" />
                  </Grid>
                  <Grid item xs={6} md={3} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.props.project.flow_image_3} alt="flow-image-1" />
                  </Grid>
                  <Grid item xs={6} md={3} style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.props.project.flow_image_4} alt="flow-image-1" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={1} md={1}></Grid>
            </Grid>

            <Grid container justify="space-between" className={classes.spacer}>
                <Grid container spacing={24}>
                  <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center'}}>
                    <img style={{maxWidth:'80%', height:'100%', width:'100%', position: 'relative', objectFit: 'contain'}} src={this.props.project.large_image_1} alt="large-image-1" />
                  </Grid>
                  <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center'}}>
                    <img style={{maxWidth:'80%', height:'100%', width:'100%', position: 'relative', objectFit: 'contain'}} src={this.props.project.large_image_2} alt="large-image-2" />
                  </Grid>
                </Grid>
            </Grid>

            {(this.props.project.large_video !== '' ? null :
              (
              <Grid container style={{background:'white'}}>
                <Grid item xs={12} md={12}>
                  <img style={{ width: '100%', height:'100%' }} src={this.props.project.large_image} alt="large image 2" />
                </Grid>
              </Grid>
              )
            )}

            <Grid container style={{background:'white'}}>
              <Grid item xs={12} md={12}>
                <div  dangerouslySetInnerHTML={{__html: this.props.project.large_video}} />

              </Grid>
            </Grid>


            <Grid container className={classes.spacerNextProject} justify="space-between">
              <Grid item xs={12} md={6}>
                <Grid container style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height:'100%',
                  paddingTop: '100px',
                  paddingBottom: '100px'
                }}>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={10} md={10}>
                    <Grid container>
                    <Typography variant="headline" style={{fontSize:'16px', color:' #848484', paddingBottom:'10px'}}>
                      More Projects
                    </Typography>
                    </Grid>

                    <Grid container>
                    {this.props.moreProjects.map((project) => {
                      if(project.slug != this.props.currProject){
                        return(
                          <Grid key={project.slug} item xs={8} md={6} lg={4} style={{marginBottom:'20px'}}>
                            <a className="link" style={{textDecoration: 'none', color: '#000000'}} href={'/project?' + project.slug}>
                              <Typography variant="button">{project.acf.client_name} | {project.acf.project_title}</Typography>
                            </a>
                          </Grid>
                        )
                      }
                      })
                    }
                  </Grid>
                </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} style={{
                background:'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '200px',
                paddingBottom: '200px'
              }}>
                  <Typography variant="body1">
                    Next Project    <a className="underline" style={{textDecoration: 'none', color: '#000000'}} href={'/project?' + this.props.project.next_project_link.post_name}>
                      <b>{this.props.project.next_project_link.post_title} <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon></b>
                    </a>
                  </Typography>
              </Grid>
              <Grid item xs={1} md></Grid>
            </Grid>

        </Grid>
      </div>

      </div>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(withRouter(Project)));
