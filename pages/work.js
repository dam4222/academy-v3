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
import { CircularProgress } from 'material-ui/Progress';

import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
const fetchUrl = process.env.fetchUrl;

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
  },
  progress: {
    
    width: '100px',
    margin: 'auto',
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
    }
  }

  handleClose = (blog) => {
    this.setState({ open: false });

  }

  handleClickOpen = (blog) => {
    
    if (blog.acf.password == ""){
      limit = "";
      Router.push(
        `/post?name=${blog.slug}`,
        
      );
    }else{
      this.setState({ 
        open: true,
        currPost: blog.slug,
        blogPassword: blog.acf.password,
      });
    }
  }

  onChange = inputPassword => event => {
    //console.log(event.target.value)
    this.setState({
      inputPassword: event.target.value,
    });
  };

  verifyPassword = () =>{
    
    
    if (this.state.inputPassword == this.state.blogPassword){
      //console.log("correct", this.state.blogPassword, this.state.inputPassword)
      limit = "";
      Router.push(
        `/post?name=${this.state.currPost}`,
        
      );
    }
    else{
      //console.log("wrong", this.state.blogPassword, this.state.inputPassword)
      this.setState({
        errorMessage: 'Something wrong with the password. Ask for permission or try again!'
      })
    }
  }

  //fetch list of projects here
  async componentWillMount (){
    const res = await fetch(url)
    const projects = await res.json()
    await this.setState({
      projects: projects,
      fetching: false,
    })
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
       
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Private post!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Provide passsword to view blog post.
              <div style={{color: 'red'}}>
              {this.state.errorMessage}
                </div>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.onChange('password')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Back
            </Button>
            <Button onClick={this.verifyPassword} color="primary">
              View Post!
            </Button>
          </DialogActions>
        </Dialog>

      {this.state.fetching ? <CircularProgress style={{marginTop: '100'}} className={classes.progress} size={200} /> : (
        <Grid container>
          {this.state.projects.map((project, i) => {

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
                          {project.acf.project_title}
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
                            image={project.acf.featured_image}
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
        </Grid>
      )}
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Work));
