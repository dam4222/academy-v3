import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import 'isomorphic-fetch'

const fetchUrl = process.env.fetchUrl;

const url = 'http://' + fetchUrl + '/wp-json/wp/v2/projects?_embed'

const styles = {
  root : {
   
  },
  description: {
    fontFamily: 'CrimsonText',
    fontSize: '36px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.06',
    letterSpacing: 'normal',
    textAlign: 'left',
  },
  
  descriptionOne: {  
    color: '#848484',
  },
  card: {
    height: '327.6px',
    borderRadius: '3.2px',
    overflow: 'hidden',
    background: 'center center'
  },
  media: {
    height: '327.6px',
    background: 'center center'
  },
  subLegend: {
    marginTop: '0',
    fontSize: '14px',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.49',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#848484',
    marginBottom: '84.2px',
  },
  projectLegend: {
    marginTop: '23.6px',
    fontWeight: 'normal',
    letterSpacing: '0.8px',
    color: '#000000',
    marginBottom: '0'
  }

};

class Work extends React.Component {

  //fetch list of projects here
  static async getInitialProps({ req }) {
    console.log(url)
    const res = await fetch(url)
    const projects = await res.json()
    return { projects }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Work</h1>
        <Grid container spacing={8}>
          <Grid item sm={2}>
            <List >
              <ListItem button>SEE ALL</ListItem>
              <ListItem button>UX/UI DESIGN</ListItem>
              <ListItem button>BRANDING</ListItem>
              <ListItem button>VIDEO</ListItem>
              <ListItem button>INDUSTRY</ListItem>
            </List>
          </Grid>

          <Grid item sm={5}>
            </Grid>

          <Grid item sm={5}>
            <div className={classes.description}>
              Our Work
              <div className={classes.descriptionOne}> 
              is Human Centered 
              </div>
            </div>
          </Grid>


        </Grid>

        <Grid container direction="row-reverse" spacing={16}>
          {this.props.projects.map((project, i) => {
            
            return (
              
              <Grid  item xs={12} sm={5}  className={classes.marginLeft}>
                <Link key={i} href={{ pathname: 'project', query: { name: project.slug }}}>
                  <a style={{textDecoration: 'none'}}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        image={project.acf.poster}
                      />
                    </Card>
                    <div className={classes.projectLegend}>
                        {project.acf.project_name}
                      </div>
                      <div className={classes.subLegend}>
                        {project.acf.project_descrption}
                      </div>
                    </a>
                </Link>
              </Grid>
                
            )
            
          })
          }
        </Grid>

      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Work));
