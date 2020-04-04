import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import 'isomorphic-fetch';
import { LinearProgress } from '@material-ui/core/LinearProgress';
import SimpleForm from '../components/simpleForm';
import Router from 'next/router';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



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
        errorMessage: 'The password you attempted is incorrect. Please request access below and we will get back to you shortly.'
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
          <meta name="description" content="We are a Product Design Agency with a Human-Centered Approach. We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles." />
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
            <Button style={{marginLeft:'20px', marginRight:'20px'}} onClick={this.verifyPassword} disableRipple={true} className={"underline"}>
              <Typography variant="button" color="inherit">
              Submit
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container>
          {this.props.projects.map((project) => {
            return (

              <Grid key={project.id} container style={{borderBottom: '1px solid black' }}>


              <Grid item xs={1} md={1} lg={1}></Grid>
              <Grid item xs={10} md={10} lg={10} className="center">

                <Grid container>
                  <Grid item xs={12} md={6} lg={6} className={classes.contentCenter}>
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


                      </div>
                  </Grid>


                  <Grid item xs={12} md={6} lg={6} className={classes.contentCenter}>

                      <Button disableRipple={true} className="projectLink" style={{overflow:'hidden'}}>
                        <img
                          className="projectImg"
                          src={project.acf.password === '' ? project.acf.featured_image: project.acf.placeholder_image}
                          style={{
                              height: 'auto',
                              width: '100%'
                          }}
                          onClick={this.handleClick.bind(this, project)}
                        />
                      </Button>

                    </Grid>
                  </Grid>



                </Grid>

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
