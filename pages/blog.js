import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import 'isomorphic-fetch'
import Link from 'next/link';
import Router from 'next/router';
import Modal from 'material-ui/Modal';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

const fetchUrl = process.env.fetchUrl;
let currPage = 1;
let limit = '';
const url = 'http://' + fetchUrl + '/wp-json/wp/v2/blogs?page=' + currPage;

const styles = {
  paddFive:{
    padding: '5%',
  },
  featuredImage: {
    maxWidth: '100%',
    maxHeight: '150px'
  }
};

class Blog extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      /* initial state */
      blogs: {},
      isLoading: false,
      open: false,
      blogPassword: '',
      inputPassword: '',
      currPost: null,
      errorMessage: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.onChange = this.onChange.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  

  async handleScroll() {
    //console.log(window.scrollY, window.outerHeight)
    if ( !this.state.isLoading && limit != "reached" && (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 64)){
      currPage += 1;
      await this.setState({
        isLoading: true,
      })
      const url = 'http://' + fetchUrl + '/wp-json/wp/v2/blogs?page=' + currPage;
    
      const res = await fetch(url)
      const blogs = await res.json()
      //console.log(this.state)
      if ("code" in blogs){
        limit = "reached"
        return ;
      }
      else if (Object.keys(blogs).length < 10){
        limit = "reached"
        currPage = 1
      }
      let prevBlogs = this.state.blogs
      await this.setState({
        blogs:  ("code" in blogs ? prevBlogs : prevBlogs.concat(blogs)),
        isLoading: false,
        open: false,
      })
    }
  }

  //fetch list of blogs here
  async UNSAFE_componentWillMount(){
    //console.log(url)
    const res = await fetch(url)
    const blogs = await res.json()
    //console.log(blogs)
    await this.setState({
      blogs: blogs
    })
  }



  handleClose = (blog) => {
    this.setState({ open: false });
    
  }

  handleClickOpen = (blog) => {
    
    if (!("password" in blog.acf)){
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



  render() {
    const { classes } = this.props;
     return (
      <div className={classes.paddFive}>
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
        {
          Object.keys(this.state.blogs).map((blog) => {
            return (
              
              <div key={this.state.blogs[blog].id} value={this.state.blogs[blog]} onClick={() => this.handleClickOpen(this.state.blogs[blog])}>
                <a style={{textDecoration: 'none'}} >
                
                  <Grid  container spacing={8}>
                  
                    <Grid item xs={3}>
                      <img src={this.state.blogs[blog].acf.featured_image} className={classes.featuredImage}/>
                    </Grid>

                    <Grid item xs={9}>
                      <Typography variant="title"> 
                        {this.state.blogs[blog].acf.title}
                      </Typography>
                      <Typography>
                        {this.state.blogs[blog].acf.description}
                        </Typography>
                    </Grid>
                  </Grid>
                </a>
              </div>
            ) 
          })
        } 
      </div>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Blog));