import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'
import Router from 'next/router'
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ReactPlayer from 'react-player'

import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;

const styles = {
  root:{
    padding: '5vw',
    marginTop: '100px',
    height: '100vh'
  },
  paddingFive:{
    padding: '5vw',
  },
  projectName :{
    width: '160px',
    height: '22px',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '1px',
    textAlign: 'left',
    color: '#000000',
  },
  catchPhrase:{
    marginTop: '12px',
    fontFamily: 'CrimsonText',
    fontSize: '36px',
    fontWeight: 'normal',
    lineHeight: '1.06',
  },
  projectDescription:{
    width: '415px',
    height: '76px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 300,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '3.17',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
  },
  projectExplanation:{
    width: '325px',
    height: '97px',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
  },
  caseStudy:{
    width: '139px',
    height: '18px',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '1.8px',
    textAlign: 'left',
    color: '#000000',
  },
  card: {
    borderRadius: '3.2px',
    objectFit: 'contain',
  },
  media: {
    height: '484px',
    
  },
  rowTitles:{
    fontFamily: 'Montserrat',
  fontSize: '14px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 'normal',
  letterSpacing: '0.8px',
  textAlign: 'left',
  color: '#000000'
  },
  titleDetail:{
    marginTop: '24px',
    width: '348px',
    height: '135px',
    fontFamily: 'Montserrat',
    fontsize: '12px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
  },
  problem:{
    width: '956px',
    height: '597px',
    objectFit: 'contain',
  }
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      /* initial state */
      project: {
      }
    };
  }

  //fetch details of the project here
  async componentWillMount(){
    const url = 'http://' + fetchUrl + '/wp-json/wp/v2/projects?slug=' + Router.query.name;
    const res = await fetch(url)
    const project = await res.json()
    console.log(project[0])
    await this.setState({
      project: project[0].acf
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container  className={classes.root}>
          <Grid item sm={5}>
            <div className={classes.projectName}>
              {this.state.project.project_name}
            </div>

            <div className={classes.catchPhrase}>
              {this.state.project.catch_phrase}
              <div className={classes.projectDescription}>
                {this.state.project.project_description}
              </div>
            </div>

            <div className={classes.projectExplanation}>
              {this.state.project.project_explanation}
            </div>
            <div>
              SEE CASE STUDY
            </div>
          </Grid>
          <Grid item sm={7}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={this.state.project.poster}
              />
            </Card>
            
            
          </Grid>
        </Grid>

        <Grid container className={classes.paddingFive}>
          <Grid item sm={7}>
          </Grid>
          <Grid item sm={5}>
            <div className={classes.rowTitles}>
              THE PROBLEM
            </div>
            <div className={classes.titleDetail}>
              {this.state.project.problem}
            </div>
          </Grid>
          <Grid item sm={2}>
            <List >
              <ListItem button>SEE ALL</ListItem>
              <ListItem button>UX/UI DESIGN</ListItem>
              <ListItem button>BRANDING</ListItem>
              <ListItem button>VIDEO</ListItem>
              <ListItem button>INDUSTRY</ListItem>
            </List>
          </Grid>
          <Grid item sm={10}>
            <Card className={classes.problem}>
              <CardMedia
                className={classes.problem}
                image={this.state.project.problem_image}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container className={classes.paddingFive}>
          <Grid item sm={2}>
          </Grid>
          <Grid item sm={10}>
            <div className={classes.rowTitles}>
              THE PROCESS
            </div>
            <div className={classes.titleDetail}>
              {this.state.project.process}
            </div>
          </Grid>

          <Grid item sm={2}>
          </Grid>
          <Grid item sm={10}>
            <Card style={{marginLeft: '4.16%'}} className={classes.problem}>
              <CardMedia
                className={classes.problem}
                image={this.state.project.process_image_1}
              />
            </Card>
          </Grid>

          <Grid item sm={1}>
          </Grid>
          <Grid item sm={11}> 
            <Card className={classes.problem}>
              <CardMedia
                className={classes.problem}
                image={this.state.project.process_image_2}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container className={classes.paddingFive}>
          <Grid item sm={7}>
          </Grid>
          <Grid item sm={5}>
            <div className={classes.rowTitles}>
              THE SOLUTION
            </div>
            <div className={classes.titleDetail}>
              {this.state.project.solution}
            </div>
          </Grid>
        </Grid> 
        <Grid container>
          <Grid item sm={12}>
            <ReactPlayer style={{height:'100vh', width:'100vw'}} url={this.state.project.solution_movie} controls/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Project));
