import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import 'isomorphic-fetch'
import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/Dialog'
import "../styles.scss"
import { withRouter } from 'next/router'

import Head from 'next/head';


const fetchUrl = process.env.fetchUrl;
let currPage = 1;
let limit = '';
const baseUrl = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs';


const styles = {
  root:{
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: '2.5vw',
    paddingRight: '2.5vw',
    paddingTop: '60px',
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
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
      open: false,
      isLoading: false,
      loaded: false,
      keyword: props.router.query.keyword,
    };

  }


  static async getInitialProps(nextProps) {
      //console.log(1, nextProps.query.keyword)
      const url = baseUrl + `?search=${nextProps.query.keyword}&page=` + currPage;
      //console.log(url)
      //fetching rest of the blogs
      const res = await fetch(url)
      const blogs = await res.json()
      console.log(blogs.length)
      return{
        blogs: blogs,
      }
  }

  formatDate = (date) =>{
    let format = new Date(date);
    format = format.toDateString();
    format = format.slice(4, 10) + ', ' + format.slice(10,);
    return format;
  }

  getAuthors = (authors) => {
    let res = []
    authors.map((author) => {
      res.push(author.display_name)
    })
    return res.join(", ")
  }

  render() {
    const { classes } = this.props;

     return (
      <div className={classes.root}>
        <Head>
          <title>Academy – Design Tinkering</title>
          <meta name="description" content="Academy is a UX & Design Thinking Studio. We craft digital experiences that make complex products seem simple. We offer end-to-end Design, Development, Research, & Analytics as well as team based Training." />
        </Head>

        <Grid container spacing={8} className={classes.container}>

            <Grid container spacing={8}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Grid container spacing={8} className="designTinkering">
                  <Typography variant="display2" gutterBottom>
                    You searched for &nbsp;
                  </Typography>
                  <Typography variant="display1" gutterBottom>
                    "{this.props.router.query.keyword}"
                  </Typography>
                </Grid>
              <Grid item xs={3}></Grid>
              </Grid>
            </Grid>

            <Grid container spacing={8} style={{paddingTop:'100px'}}>

              <Grid item xs={1} md={2}></Grid>

              <Grid item xs={10} md={8}>
                <Typography variant="title" style={{textAlign:'center', paddingBottom:'20px'}}>
                  Search Results
                </Typography>

                <Grid container spacing={24}>
                {
                this.props.blogs.map((blog) => {
                  return (
                    <Link key={blog.id} href={{ pathname: 'post', query: { name: blog.slug }}} as={`/post?${blog.slug}`}>
                    <Grid item xs={12} sm={8} md={4} className="heroHover" style={{paddingTop:'100px'}}  value={blog}>
                      <Paper elevation={0} style={{width:'100%', height:'100%'}} className="headlineHover">

                          <div style={{width:'100%', overflow:'hidden'}}>

                            <div style={{backgroundImage: "url("+blog.acf.featured_image+")", backgroundSize: 'cover', width:'110%', height: '300px', backgroundPosition: 'center'}}></div>

                        </div>
                        <div style={{padding:'30px', textAlign:'center',}}>
                            <Typography variant="headline" paragraph>
                            {blog.acf.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              {this.formatDate(blog.date)}
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                              By {this.getAuthors(blog.acf.author)}
                            </Typography>
                          </div>

                        </Paper>
                    </Grid>
                    </Link>
                  )
                  })
                  }
                </Grid>
          </Grid>
          </Grid>

          <Grid item xs={1} md={2}></Grid>
        </Grid>


      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(withRouter(Search)));
