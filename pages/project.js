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
    transition: 'all .5s cubic-bezier(.02, .01, .47, 1)'
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
      backgroundColor: this.props.project.project_theme_color,
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

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll=()=>{
    if (window.pageYOffset > 10) {
      this.setState({ backgroundColor: 'white' });

    }else{
      this.setState({ backgroundColor: this.props.project.project_theme_color });
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
        <div>
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
      <div className={classes.root} style={{backgroundColor: this.state.backgroundColor, position: 'relative'}}>

        <div>
          <Head>
            <title>Academy – {this.props.project.client_name + " – " + this.props.project.project_title}</title>
            <meta name="description" content={this.props.project.project_description}/>
          </Head>

        <Grid container className="project" style={{height:'100%', position:'relative'}}>
          <Grid item xs={1} md={2}></Grid>
          <Grid item xs={10} md={8}>
          <Grid container>
            <Grid item xs={12} md={2} lg={4}></Grid>
            <Grid item xs={12} md={10} lg={8} style={{padding: '12rem 0rem 7rem 0rem'}}>
              <div className={classes.projectLegend} style={{padding: '0rem 0rem 1rem 0rem'}}>
                <Typography variant="title" style={{opacity:'.5', color: this.props.project.project_font_color}} className={classes.projectLegend}>
                  Client&nbsp;
                </Typography>
                <Typography variant="title" className={classes.projectLegend} style={{color: this.props.project.project_font_color}}>
                  {this.props.project.client_name}
                </Typography>
              </div>
              <div className={classes.subLegend}>
                <Typography variant="display2" style={{color: this.props.project.project_font_color}}>
                  {this.props.project.project_title}
                </Typography>
              </div>

            </Grid>
            </Grid>
          </Grid>

        <Grid item xs={1} md={2}></Grid>

        <Grid container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={10} md={6}>
              <Grid container className="project" >

                <img width='95%'
                src={this.props.project.featured_image}
                alt="featured image"
                style={{padding: '0rem 0rem 7rem 0rem'}}
                />
                </Grid>
                </Grid>

              <Grid item xs={1} md={3}></Grid>
        </Grid>
        </Grid>


        <Grid container className={classes.content}>
            <Grid item xs={12}>

              <Grid container>
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={10} md={8}>

                <Grid container style={{paddingBottom:'5rem'}}>
                <Grid item xs={12} md={12} lg={4}><Typography variant="title" style={{fontSize:'1rem' ,paddingBottom:'2rem'}}>Introduction</Typography></Grid>
                <Grid item xs={12} md={12} lg={8}>
                  <Typography variant="display4" style={{fontSize:'calc(1.6em + .25vw)'}} gutterBottom paragraph>
                    {this.props.project.project_description}
                  </Typography>


                  {this.props.project.link.length > 0 &&
                    <Typography variant="button" paragraph>
                      <a href={this.props.project.link} target="_blank" rel="noopener" className="underline" style={{textDecoration: 'none', color:'black'}}>
                        Visit Site <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>chevron_right</Icon>
                      </a>
                    </Typography>
                  }

                </Grid>
                </Grid>

              </Grid>
              <Grid item xs={1} md={2}></Grid>
              </Grid>

              <Grid container>
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={10} md={8}>

                <Grid container style={{paddingBottom:'5rem'}}>
                <Grid item xs={12} md={12} lg={4}></Grid>

                  <Grid item xs={12} md={12} lg={8}>
                    <Grid container>
                      <Grid item xs={12} md={10} lg={5}>
                        <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                          KPIs
                        </Typography>
                        <Typography variant="body1" gutterBottom paragraph>
                          {this.props.project.project_kpis} Lorum IpsumMinim esse dolor cupidatat veniam exercitation laborum reprehenderit velit laboris ut. Magna anim tempor aliquip nulla ex esse anim nisi deserunt aliqua nisi laboris dolore enim laboris occaecat. Et nisi m
                        </Typography>
                      </Grid>
                      <Grid item xs={1} md={1}></Grid>

                      <Grid item xs={12} md={10} lg={5}>
                        <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                          Tasks
                        </Typography>
                        <Typography variant="body1" style={{fontSize:'1rem'}} gutterBottom paragraph>
                          {this.props.project.project_tasks} Lorum IpsumMinim esse dolor cupidatat veniam exercitation laborum reprehenderit velit laboris ut. Magna anim tempor aliquip nulla ex esse anim nisi deserunt aliqua nisi laboris dolore enim laboris occaecat. Et nisi m
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr className="divider" style={{marginTop:'4rem'}}></hr>
                  </Grid>

                </Grid>

                <Grid container style={{paddingBottom:'5rem'}}>
                <Grid item xs={12} md={12} lg={4}></Grid>

                  <Grid item xs={12} md={12} lg={8}>
                    <Grid container>
                      <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="title" style={{fontSize:'1rem'}} gutterBottom paragraph>
                          Goals
                        </Typography>
                        <Typography variant="body1" gutterBottom paragraph>
                          {this.props.project.project_goals} Lorum IpsumMinim esse dolor cupidatat veniam exercitation laborum reprehenderit velit laboris ut. Magna anim tempor aliquip nulla ex esse anim nisi deserunt aliqua nisi laboris dolore enim laboris occaecat. Et nisi m
                        </Typography>
                      </Grid>
                      <Grid item xs={1} md={1}></Grid>

                    </Grid>
                  </Grid>

                </Grid>

              </Grid>
              <Grid item xs={1} md={2}></Grid>
              </Grid>




            <Grid container>
              <Grid item xs={12}>

              <Grid container spacing={8} id="section-one" className={classes.process}>
                <Grid item xs={1} md={2}></Grid>
                  <Grid item xs={10} md={8}>

                    <Grid container style={{paddingBottom:'5rem'}}>
                    <Grid item xs={12} md={12} lg={4}><Typography variant="title" style={{fontSize:'1rem' ,paddingBottom:'2rem'}}>Quotes</Typography></Grid>
                    <Grid item xs={12} md={12} lg={8}>

                    </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={1} md={2}></Grid>

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
            </Grid>

            <Grid container spacing={16} justify="space-between" className={classes.spacer}>
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


            <Grid container className={classes.spacerNextProject} justify="space-between" style={{backgroundColor:"rgb(247,247,247)"}}>
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
                background:'rgb(237,237,237)',
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
