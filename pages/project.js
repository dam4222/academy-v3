import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'
import Router from 'next/router'
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ReactPlayer from 'react-player';
import { LinearProgress } from 'material-ui/Progress';
import { Parallax } from 'react-scroll-parallax';
import Plx from 'react-plx';
import Head from 'next/head'

import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;

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
    paddingBottom: '20vh',
    paddingTop: '20vh',
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
      fetching: true,
      project: {
        next_project_link:{}
      },
      moreProjects:[],
      bgColor: '#ffffff'
    };
  }

  //fetch details of the project here
  async componentWillMount(){
    const url = 'https://' + fetchUrl + '/wp-json/wp/v2/projects?slug=' + Router.query.name;
    const res = await fetch(url)
    const project = await res.json()
    //console.log(project[0])
    await this.setState({
      project: project[0].acf,
      fetching: false,
      bgColor: project[0].acf.project_theme_color,
    })
    //fetch more projects to display at the end
    const url2 = 'https://' + fetchUrl + '/wp-json/wp/v2/projects';
    const res2 = await fetch(url2)
    const moreProjects = await res2.json()
    await this.setState({
      moreProjects: moreProjects
    })
  }

  handleClick() {
    Router.back()
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} style={{backgroundColor: this.state.bgColor}}>
      { this.state.fetching ? <LinearProgress className="progress" /> : (
        <div>
          <Head>
            <title>Academy – {this.state.project.client_name + " – " +  this.state.project.project_title}</title>
            <meta name="description" content={this.state.project.project_description}/>
          </Head>

        <Grid container className="project" style={{height: '100vh'}}>

          <Grid item xs={12} md={4} style={{ zIndex: 999, backgroundColor: 'white', padding:'20px', position:'absolute', top:'25%', left:'5%' }}>
            <div className={classes.projectLegend}><IconButton className="arrowBack" style={{top:'-56px', left:'-19px', transform:'scale(.5)'}} onClick={this.handleClick}><Icon>chevron_left</Icon></IconButton></div>
            <div className={classes.projectLegend}>
              <Typography variant="title" color="secondary" className={classes.projectLegend}>
                Client &nbsp;
              </Typography>
              <Typography variant="title" color="primary" className={classes.projectLegend}>
                {this.state.project.client_name}
              </Typography>
            </div>
            <div className={classes.subLegend}>
              <Typography variant="display2" color="inherit">
                {this.state.project.project_title}
              </Typography>
            </div>
            <Typography variant="button" color="inherit" style={{paddingTop:'20px'}}>
              Read More <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>arrow_downwards</Icon>
            </Typography>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={10} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Grid container className="project" style={{height:'100vh'}}>
              <Grid item xs={1}></Grid>
              <Grid item xs={10} style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
              <Plx
              style={{bottom:0, position:'relative'}}
              className='MyAwesomeParallax'
              parallaxData={ ParallaxData } // your parallax effects, see beneath
              animateWhenNotInViewport={ true }
              >
                  <img width="100%"
                  style={{
                    maxWidth:'100%',
                  }}
                  src={this.state.project.featured_image}
                  alt="featured image"
                  />

              </Plx>
              </Grid>
              </Grid>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
          </Grid>


        <Grid container spacing={8} className={classes.content}>

            <Grid container spacing={16} className={classes.spacer} style={{background:'white'}}>
              <Grid item xs={1} md={3}></Grid>

              <Grid item xs={10} md={6}>
                <Grid container>
                <Grid item xs={10} md={6}>
                  <Typography variant="body1" style={{fontSize:'24px'}} gutterBottom paragraph>
                    <div dangerouslySetInnerHTML={{__html: this.state.project.project_description}}></div>
                  </Typography>
                  <Typography variant="button" paragraph>
                    <a href="#" className="underline" style={{textDecoration: 'none', color:'black'}}>
                      Visit Site <Icon style={{fontSize:'14px', verticalAlign: 'middle'}}>chevron_right</Icon>
                    </a>
                  </Typography>
                </Grid>

                <Grid item xs={10} md={4}></Grid>
                <Grid item xs={10} md={2} style={{display: 'flex', flexDirection:'column'}}>
                  <Typography variant="button" paragraph>
                    <a href="#section-one" className="underline" style={{textDecoration: 'none', color:'rgba(0, 0, 0, .5)'}}>
                      01   —   {this.state.project.section_1_title}
                    </a>
                  </Typography>
                  <Typography variant="button" paragraph>
                  <a href="#section-two" className="underline" style={{textDecoration: 'none', color:'rgba(0, 0, 0, .5)'}}>
                      02   —   {this.state.project.section_2_title}
                    </a>
                  </Typography>
                  <Typography variant="button" paragraph gutterBottom>
                    <a href="#section-three" className="underline" style={{textDecoration: 'none', color:'rgba(0, 0, 0, .5)'}}>
                      03   —   {this.state.project.section_3_title}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              </Grid>
              <Grid item xs={1} md={3}></Grid>
            </Grid>

            <Grid container style={{backgroundColor: this.state.bgColor}}>
              <Grid container spacing={24} id="section-one" className={classes.process}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                  <Grid container>
                    <Grid item xs={10} sm={12} md={4} lg={4}>
                      <Typography variant="body1" >
                        <b>{this.state.project.section_1_title}</b>. {this.state.project.section_1_description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <Parallax
                          className="sectionImg"
                          offsetYMax={25}
                          offsetYMin={-25}
                          slowerScrollRate={false}
                      >
                          <div dangerouslySetInnerHTML={{__html: this.state.project.section_1_media}}></div>
                        </Parallax>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} md={3}></Grid>
              </Grid>

              <Grid container spacing={24} id="section-two" className={classes.process}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                  <Grid container style={{flexWrap: 'wrap-reverse'}}>

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <Parallax
                          className="sectionImg"
                          offsetYMax={25}
                          offsetYMin={-25}
                          slowerScrollRate={false}
                      >
                            <div dangerouslySetInnerHTML={{__html: this.state.project.section_2_media}}></div>

                        </Parallax>

                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
                      <Grid item xs={10} sm={12} md={4} lg={4} >
                          <Typography variant="body1" >
                            <b>{this.state.project.section_2_title}</b>. {this.state.project.section_2_description}
                          </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                <Grid item xs={1} md={3}></Grid>
              </Grid>

              <Grid container spacing={24} id="section-three" className={classes.process}>
                <Grid item xs={1} md={3}></Grid>
                <Grid item xs={10} md={6}>
                  <Grid container>
                    <Grid item xs={10} sm={12} md={4} lg={4}>
                      <Typography variant="body1" >
                        <b>{this.state.project.section_3_title}</b>. {this.state.project.section_3_description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <Parallax
                          className="sectionImg"
                          offsetYMax={25}
                          offsetYMin={-25}
                          slowerScrollRate={false}
                      >
                          <div dangerouslySetInnerHTML={{__html: this.state.project.section_3_media}}></div>
                        </Parallax>
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
                  <Grid item xs={6} md={3}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.state.project.flow_image_1} alt="flow-image-1" />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.state.project.flow_image_2} alt="flow-image-1" />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.state.project.flow_image_3} alt="flow-image-1" />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <img style={{ maxWidth: '90%', paddingBottom:'20px' }} src={this.state.project.flow_image_4} alt="flow-image-1" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={1} md={1}></Grid>
            </Grid>

            <Grid container justify="space-between" className={classes.spacer} style={{paddingBottom:'8px'}}>
                <Grid container spacing={24}>
                  <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center'}}>
                    <img style={{maxWidth:'80%', height:'100%', width:'100%', position: 'relative'}} src={this.state.project.large_image_1} alt="large-image-1" />
                  </Grid>
                  <Grid item xs={12} md={6} style={{display:'flex', justifyContent:'center'}}>
                    <img style={{maxWidth:'80%', height:'100%', width:'100%', position: 'relative'}} src={this.state.project.large_image_2} alt="large-image-2" />
                  </Grid>
                </Grid>
            </Grid>


            <Grid container style={{background:'white'}}>
              <Grid item xs={12} md={12}>
                <img style={{ width: '100%', height:'100%' }} src={this.state.project.large_image} alt="large image 2" />
              </Grid>
            </Grid>

            <Grid container className={classes.spacerNextProject} justify="space-between">
              <Grid item xs={1} md={1}></Grid>
              <Grid item xs={10} md={5}>
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
                    {this.state.moreProjects.map((project) => {
                      if(project.slug != Router.query.name){
                        return(
                          <Grid key={project.slug} item xs={4} md={4}>
                            <a className="underline" style={{textDecoration: 'none', color: '#000000'}} href={'/project?name=' + project.slug}>
                              <Typography variant="button">{this.state.project.client_name} | {this.state.project.project_title}</Typography>
                            </a>
                          </Grid>
                        )
                      }
                      })
                    }
                  </Grid>
                </Grid>
                <Grid item xs={1} md={1}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} style={{
                background:'#f6f6f6',
                height:'100%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '115px',
                paddingBottom: '115px'
              }}>
                  <Typography variant="body1">
                    Next Project    <a className="underline" style={{textDecoration: 'none', color: '#000000'}} href={'/project?name=' + this.state.project.next_project_link.post_name}>
                      <b>{this.state.project.next_project_link.post_title} <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon></b>
                    </a>

                  </Typography>
              </Grid>
              <Grid item xs={1} md></Grid>
            </Grid>

        </Grid>
      </div>
      )}
      </div>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Project));
