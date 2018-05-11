import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
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
import { CircularProgress } from 'material-ui/Progress';

import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;

const styles = theme => ( {
  root:{
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  progress: {
    margin: theme.spacing.unit * 2,
    width: '100px',
    margin: 'auto',
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
    })
    //fetch more projects to display at the end
    const url2 = 'https://' + fetchUrl + '/wp-json/wp/v2/projects';
    const res2 = await fetch(url2)
    const moreProjects = await res2.json()
    await this.setState({
      moreProjects: moreProjects
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      { this.state.fetching ? <CircularProgress className={classes.progress} size={200} /> : (
        <Grid container spacing={8}>
          <Grid item xs={12} sm={1}></Grid>

          <Grid item xs={12} sm={10}>
            <Grid container spacing={16}>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={8}>
                {/*Feature Image displayed here*/}
                <img style={{ maxWidth: '100%' }} src={this.state.project.featured_image} alt="featured image" />
              </Grid>
              <Grid item xs={12} md={2}></Grid>
            </Grid>
            
            
            <Grid container spacing={16}>
              <Grid item xs={12} md={1}></Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1" align="justify" gutterBottom>
                  <div dangerouslySetInnerHTML={{__html: this.state.project.project_description}}></div>
                </Typography>
              </Grid>

              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={2}>
                <Typography variant="body1" >
                  <a href="#section-one" style={{textDecoration: 'none', color: '#000000'}}>
                    01 - {this.state.project.section_1_title}
                  </a>
                </Typography>
                <Typography variant="body1">
                <a href="#section-two" style={{textDecoration: 'none', color: '#000000'}}>
                    02 - {this.state.project.section_2_title}
                  </a>
                </Typography>
                <Typography variant="body1">
                  <a href="#section-three" style={{textDecoration: 'none', color: '#000000'}}>
                    03 - {this.state.project.section_3_title}
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>

            <Grid container spacing={24} direction="row-reverse" id="section-one">
              <Grid item xs={12} md={1}></Grid>
              <Grid item xs={12} md={4} >
                <Typography variant="body1" >
                  <b>{this.state.project.section_1_title}</b>. {this.state.project.section_1_description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={4} >
                <div  dangerouslySetInnerHTML={{__html: this.state.project.section_1_media}}></div>
              </Grid>
            </Grid>

            <Grid container spacing={24} id="section-two">
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={4} >
                  <Typography variant="body1" >
                    <b>{this.state.project.section_2_title}</b>. {this.state.project.section_2_description}
                  </Typography>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
              <Grid item xs={12} md={4} >
                  <div  dangerouslySetInnerHTML={{__html: this.state.project.section_2_media}}></div>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>


            <Grid container spacing={24} direction="row-reverse" id="section-three">
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={4} >
                  <Typography variant="body1" >
                    <b>{this.state.project.section_3_title}</b>. {this.state.project.section_3_description}
                  </Typography>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
              <Grid item xs={12} md={4} >
                  <div  dangerouslySetInnerHTML={{__html: this.state.project.section_3_media}}></div>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>

            <Grid container spacing={16} justify="space-between">
            <Grid item xs={12} md={1}></Grid>
              
              <Grid item xs={12} md={2}>
                <img style={{ maxWidth: '90%' }} src={this.state.project.flow_image_1} alt="flow-image-1" />
              </Grid>
              <Grid item xs={12} md={2}>
                <img style={{ maxWidth: '90%' }} src={this.state.project.flow_image_2} alt="flow-image-1" />
              </Grid>
              <Grid item xs={12} md={2}>
                <img style={{ maxWidth: '90%' }} src={this.state.project.flow_image_3} alt="flow-image-1" />
              </Grid>
              <Grid item xs={12} md={2}>
                <img style={{ maxWidth: '90%' }} src={this.state.project.flow_image_4} alt="flow-image-1" />
              </Grid>
              
              <Grid item xs={12} md={1}></Grid>
            </Grid>

            <Grid container spacing={16} justify="space-between">
              <Grid item xs={12} md={1}></Grid>
              <Grid item xs={12} md={5}>
                <img style={{ maxWidth: '90%' }} src={this.state.project.large_image_1} alt="large-image-1" />
              </Grid> 
              <Grid item xs={12} md={5}>
                <img style={{ maxWidth: '90%' }} src={this.state.project.large_image_2} alt="large-image-2" /> 
              </Grid>
              <Grid item xs={12} md={1}></Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={12}>
                <img style={{ width: '100%' }} src={this.state.project.large_image} alt="large image 2" />
              </Grid>
            </Grid>

            <Grid container spacing={16} justify="space-between">
              <Grid item xs={12} md={4}> 
                <Grid container spacing={16}>
                  <Grid item xs={12} md={12}>
                    <Typography variant="title">
                      More Projects
                    </Typography>
                  </Grid>
                  {this.state.moreProjects.map((project) => {
                      return(
                        <Grid key={project.slug} item xs={4} md={4}>
                          <a style={{textDecoration: 'none', color: '#000000'}} href={'/project?name=' + project.slug}> 
                            {project.acf.client_name}
                          </a>
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}> </Grid>
              <Grid item xs={12} md={5}> 
                  <Typography variant="body1">
                    Next Project    <a style={{textDecoration: 'none', color: '#000000'}} href={'/project?name=' + this.state.project.next_project_link.post_name}> 
                      <b>{this.state.project.next_project_link.post_title} <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon></b>
                    </a>
                    
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} sm={1}></Grid>
        </Grid>
      )}
      </div>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Project));
