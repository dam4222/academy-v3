import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
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
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import { CircularProgress } from 'material-ui/Progress';
import Input, {InputLabel, InputAdornment } from 'material-ui/Input';

import { FormControl } from 'material-ui/Form';


const fetchUrl = process.env.fetchUrl;
let currPage = 1;
let limit = '';
const url = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs?page=' + currPage;

const styles = {
  root:{
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  featuredImage: {
    maxWidth: '100%',
    maxHeight: '150px'
  },
  container:{
    background:'linear-gradient(119deg, #ebf5f4, #efebf5)',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    paddingBottom:'200px'
  },
  center:{
    textAlign:'center',
    justifyContent: 'center',
    paddingTop:'10vh',
    paddingBottom:'10vh',
  },
  centerImg:{
    textAlign:'center',
    justifyContent: 'center',
  },
  headline:{
    top: '60vh',
    display: 'flex',
    position: 'absolute',
    textAlign: 'center',
  },
  progress: {
    width: '100px',
    margin: 'auto',
  },
};

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      /* initial state */
      initFetching: true,
      blogs: {},
      isLoading: false,
      open: false,
      blogPassword: '',
      inputPassword: '',
      currPost: null,
      errorMessage: '',
      blogSearch: '',
      fetching: true,
      featuredBlog: [{
        date: '',
        acf: {
          featured_image: '',
          author: {
            display_name: ''
          }
        },
      }],
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
        fetching: true
      })
      const url = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs?page=' + currPage;
    
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
        fetching: false
      })
    }
  }


  //fetch list of blogs here
  async UNSAFE_componentWillMount(){
    //console.log(url)
    
    let res = await fetch(url)
    let blogs = await res.json()
    //console.log(blogs)
    await this.setState({
      blogs: blogs
    })

    //fetch featured here
    const url_feat = "https://" + fetchUrl + "/wp-json/wp/v2/blogs/?featured=true";
    const res_feat = await fetch(url_feat);
    const featured = await res_feat.json()
    //console.log(featured[0]);
    if (featured.length > 0){
      await this.setState({
        featuredBlog: featured,
        initFetching: false,
      })
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

   searchBlogs = blogSearch => event => {

     this.fetchSearch(event.target.value);
  }

  fetchSearch = async () =>{
    await this.setState({
      fetching: true
    })
    const url = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs?search=' + event.target.value;
    const res = await fetch(url)
    const blogs = await res.json()
    //console.log(blogs)
    await this.setState({
      blogs: blogs,
      fetching: false
    })
  }

  formatDate = (date) =>{
    let format = new Date(date);
    format = format.toDateString();
    format = format.slice(4, 10) + ', ' + format.slice(10,);
    return format;
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

        { this.state.initFetching ? <CircularProgress className={classes.progress}  size={'50vw'} /> : (
        <Grid container spacing={8} className={classes.container}>

            <Grid container spacing={8}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Grid container spacing={8} className={classes.center}>
                  <Typography variant="display2" gutterBottom>
                    Design
                  </Typography>
                  <Typography variant="display1" gutterBottom>
                    Tinkering
                  </Typography>
                </Grid>
              <Grid item xs={3}></Grid>
              </Grid>
            </Grid>

            <Grid container spacing={8} onClick={() => this.handleClickOpen(this.state.featuredBlog[0])}>
              <Grid item xs={1} md={3}></Grid>
              <Grid item xs={10} md={6}>
                <Grid container spacing={8} className={classes.centerImg}>
                  <ParallaxBanner
                    className="heroImgWorkshops"
                    layers={[
                        {
                            image: this.state.featuredBlog[0].acf.featured_image,
                            amount: 0.2,
                            slowerScrollRate: false,
                        },
                    ]}
                    style={{
                        height: '60vh',
                        top: '0',
                        maxWidth:'605px'
                    }}
                  >
                  </ParallaxBanner>
                </Grid>
                <Grid container spacing={8} className={classes.headline} >
                  <Grid item xs={1} md={4}></Grid>
                  <Grid item xs={10} md={4} xl={3} >
                    <Paper elevation={0} style={{padding:'3vh'}}>
                    <Typography variant="display2" paragraph>
                      {this.state.featuredBlog[0].acf.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    {this.formatDate(this.state.featuredBlog[0].date)}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                      By {this.state.featuredBlog[0].acf.author.display_name}
                    </Typography>
                  </Paper>
                  </Grid>
                  <Grid item xs={1} md={4}></Grid>
                </Grid>
              <Grid item xs={1} md={3}></Grid>
              </Grid>
            </Grid>

            <Grid container spacing={8} style={{paddingTop:'200px'}}>

    <Grid item xs={1} md={2}></Grid>

    <Grid item xs={10} md={8}>
      <Typography variant="title" style={{textAlign:'center', paddingBottom:'20px'}}>
        Latest Posts
      </Typography>
    <Grid container spacing={24}>
      {
      Object.keys(this.state.blogs).map((blog) => {
        return (
       
          <Grid item xs={12} md={4}  style={{paddingTop:'50px'}} key={this.state.blogs[blog].id} value={this.state.blogs[blog]} onClick={() => this.handleClickOpen(this.state.blogs[blog])}>

              <ParallaxBanner
                className="heroImgWorkshops"
                layers={[
                    {
                        image: this.state.blogs[blog].acf.featured_image,
                        amount: 0.2,
                        slowerScrollRate: false,
                    },
                ]}
                style={{
                    height: '20vh',
                    top: '0',
                    maxWidth:'605px'
                }}
              >
              </ParallaxBanner>

              <Paper elevation={0} style={{padding:'20px', textAlign:'center'}}>
                <Typography variant="headline" paragraph>
                {this.state.blogs[blog].acf.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {this.formatDate(this.state.blogs[blog].date)}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  By {this.state.blogs[blog].acf.author.display_name}
                </Typography>
              </Paper>

          
            </Grid>
              )
            })
          }
           </Grid>
          </Grid>
          </Grid>
            
          <Grid item xs={1} md={2}></Grid>
        </Grid>
      )}
      
      </div>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Blog));
