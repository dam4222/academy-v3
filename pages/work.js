import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import 'isomorphic-fetch'

const fetchUrl = process.env.fetchUrl;

const url = 'http://' + fetchUrl + '/wp-json/wp/v2/projects?_embed'

const styles = {
  root : {
    display: 'flex',
    flexGrow: 1,
    flexWrap:'wrap',
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
    height: '300px',
    width: '300px',
    borderRadius: '3.2px',
    overflow: 'hidden',
    background: 'center center'
  },
  media: {
    height: '300px',
    width: '300px',
    background: 'center center'
  },
  subLegend: {
  },
  projectLegend: {
    display:'inline-block',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'60vh',
    textAlign:'right'
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
          {this.props.projects.map((project, i) => {

            return (
            <Grid container>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={12} sm={5} className={classes.center}>
                <Link key={i} href={{ pathname: 'project', query: { name: project.slug }}}>
                  <a style={{textDecoration: 'none', color:'black'}}>
                      <div className={classes.projectLegend}>
                        <Typography variant="title" color="secondary" className={classes.projectLegend}>
                          Client &nbsp;
                        </Typography>
                        <Typography variant="title" color="primary" className={classes.projectLegend}>
                          {project.acf.client_name}
                        </Typography>
                      </div>
                      <div className={classes.subLegend}>
                        <Typography variant="display2" color="inherit">
                          {project.acf.project_name}
                        </Typography>
                      </div>
                          <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"}>
                            <Typography variant="button" color="inherit">
                              Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                            </Typography>
                          </Button>
                    </a>
                  </Link>
                </Grid>
                  <Grid item xs={12} sm={5} className={classes.center}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-50}
                        offsetYMin={50}
                        slowerScrollRate
                    >
                    <Link key={i} href={{ pathname: 'project', query: { name: project.slug }}}>
                      <a style={{textDecoration: 'none'}}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={project.acf.poster}
                          />
                        </Card>
                      </a>
                    </Link>
                    </Parallax>
                  </Grid>
                  <Grid item xs={1} sm={1}></Grid>
                </Grid>

            )

          })
          }

      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Work));
