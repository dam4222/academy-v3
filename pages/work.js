import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import 'isomorphic-fetch'
import { LinearProgress } from 'material-ui/Progress';
import SimpleForm from '../components/simpleForm';
import Router from 'next/router'

import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
const fetchUrl = process.env.fetchUrl;
import Head from 'next/head';

const url = 'https://' + fetchUrl + '/wp-json/wp/v2/projects?'

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
  subLegend: {
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
};


class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
      fetching: true,
      open: false,
      errorMessage: '',
      blogPassword: '',
      currPost: undefined,
    }

  }

  handleClick = (project) => {
    if (project.acf.password === ''){
      Router.push(`/project?${project.slug}`).then(() => window.scrollTo(0, 0));
    }
    else{
      this.setState({
        open: true,
        blogPassword: project.acf.password,
        currPost: project.slug,
      })
    }
  }

  handleClose = (blog) => {
    this.setState({ open: false });

  }

  verifyPassword = () =>{
    if (this.state.inputPassword == this.state.blogPassword){

      Router.push({
        pathname: '/project',
        query: {
          password: this.state.blogPassword,
        },
      },
      `/project?${this.state.currPost}`).then(() => window.scrollTo(0, 0));;
    }
    else{

      this.setState({
        errorMessage: 'The password you attempted is incorrect. Please request access below and we will get back to your shortly.'
      })
    }
  }

  setPassword = event => {
    this.setState({
      inputPassword: event.target.value
    })
  }

  //fetch list of projects here
  static async getInitialProps({ req }) {
    //Fetching featured blog below, if more than one are featured, the latest one will be displayed
    const res = await fetch(url)
    const projects = await res.json()
    return {
      projects: projects,
    }
  }


  render() {
    const { classes, backgroundColor } = this.props;
    return (
      <div className={classes.root}>
        <Head>
          <title>Academy – Work</title>
          <meta name="description" content="Short Description here" />
        </Head>

        <Dialog
          open={this.state.open}
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
            <SimpleForm title='Request Access'/>
            <Button onClick={this.verifyPassword} disableRipple={true} className={"underline"}>
              <Typography variant="button" color="inherit">
              Submit
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container>
          {this.props.projects.map((project) => {
            return (
              <Grid key={project.id} container className="center">
                <Grid item xs={1} md={1} lg={1}></Grid>
                <Grid item xs={10} md={10} lg={4} className={classes.contentCenter}>



                  <div onClick={this.handleClick.bind(this, project)}>

                        <Typography variant="title" color="secondary" className={classes.projectLegend}>
                          Client &nbsp;
                        </Typography>
                        <Typography variant="title" color="primary" className={classes.projectLegend}>
                          {project.acf.client_name}
                        </Typography>


                        <Typography variant="display2" color="inherit" style={{paddingRight: '100px'}}>
                          {project.acf.project_title}
                        </Typography>

                          <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"}>
                            <Typography variant="button" color="inherit">
                              Learn more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                            </Typography>
                          </Button>
                    </div>

                </Grid>
                  <Grid item xs={12} md={12} lg={7} className={classes.contentCenter}>

                      <Button disableRipple={true} className="projectLink" style={{overflow:'hidden'}}>
                        <img
                          className="projectImg"
                          src={project.acf.password === '' ? project.acf.featured_image: 'https://cdn1.academyux.com/wp-content/uploads/2018/06/12220205/p02svpws.jpg'}
                          style={{
                              height: '97vh',
                          }}
                          onClick={this.handleClick.bind(this, project)}
                        />
                      </Button>
                  </Grid>
            </Grid>
            )
          })
          }
        </Grid>

      <div className="mask"></div>
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Work));
