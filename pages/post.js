import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import { withRouter } from 'next/router'
import Link from 'next/link';
const fetchUrl = process.env.fetchUrl;
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import "../styles.scss"
import Head from 'next/head'



const styles = {
  root:{
    height:'auto',
    paddingTop:'100px'
  }
};

class Post extends React.Component {

  constructor(children, router, href) {
    super(children, router, href);
    //console.log(props);
    this.state = {
      /* initial state */
      fetching: true,
      children: children,
      content: {
      },
      title: '',
      moreArticles: [

      ],
    };
    
  }


  formatDate = (date) =>{
    let format = new Date(date);
    format = format.toDateString();
    if (format.slice(9, 10) == '1')
      format = format.slice(4, 10) + 'st, ' + format.slice(10,);
    else if (format.slice(9, 10) == '2')
      format = format.slice(4, 10) + 'nd, ' + format.slice(10,)
    else if (format.slice(9, 10) == '3')
      format = format.slice(4, 10) + 'rd, ' + format.slice(10,);
    else
      format = format.slice(4, 10) + 'th, ' + format.slice(10,);
    return format;
  }

  //fetch details of the blog here
  static async getInitialProps(nextProps) {
    
    //To share the post use the following plugin
    //console.log(window.location.href);
    //console.log(this.state.children);
    let path = nextProps.asPath
    //console.log(path)
    path = path.substr(6);
    console.log(path)
    const url = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs?slug=' + path;
    const res = await fetch(url)
    const blog = await res.json()
    //console.log(blog)
    if (blog.length > 0){
    let date_posted = new Date(blog[0].date);

    let raw_tags = blog[0].acf.tags === null ? [] : blog[0].acf.tags
    let tags = [];
    if (raw_tags.length > 0){
      raw_tags.map((tag) =>{
        tags.push[tag.name];
      });
    }

    const url2 = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs?per_page=4';
    const res2 = await fetch(url2)
    const moreArticles = await res2.json()
    //console.log(blog)
    
      

    return({
      currSlug: blog[0].slug,
      content: blog[0].content.rendered,
      short_description: blog[0].acf.short_description,
      title: blog[0].acf.title,
      tags: tags,
      author_name: blog[0].acf.author.display_name,
      author_picture: blog[0].acf.author.user_avatar,
      date_posted: date_posted,
      author_job_title: blog[0].acf.author_job_title,
      fetching: false,
      moreArticles: moreArticles,
    })
    }
    
  }



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      
          <div>
            <Head>
              <title>Academy – {this.props.title}</title>
              <meta name="description" content={this.props.short_description} />
            </Head>
          <Grid container style={{marginBottom:'40px'}}>
          <Grid xs={1} md={3} lg={4} xl={4}></Grid>
          <Grid xs={10} md={6} lg={4} xl={4} >
          <div>
            <Typography variant="body1" style={{fontSize:'12px'}} paragraph>
              {this.formatDate(this.props.date_posted)}
            </Typography>
            <Typography variant="display4" paragraph>
              {this.props.title}
            </Typography>

            <Grid xs={12} style={{paddingBottom:'40px'}}>
              <Grid container>
                <Grid xs={6} md={6} style={{display:'flex', alignItems:'center'}}>
                <div className="author-profile" dangerouslySetInnerHTML={{__html: this.props.author_picture}}></div>
                <div style={{display: 'inline-block', paddingLeft: '15px'}}>
                <Typography variant="button">by {this.props.author_name}</Typography>
                <Typography variant="caption">{this.props.author_job_title}</Typography>
                </div>
                </Grid>
              </Grid>
            </Grid>

              <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}>
              </div>

            <div>
              {this.props.tags.map((tag ) => {
                return(
                  <Chip label={tag} className={classes.chip} />
                )
              })}

            </div>

          </div>

            <Divider style={{margin:'100px'}}/>
          </Grid>
          <Grid xs={1} md={3} lg={4} xl={4}></Grid>

          </Grid>
            </div>
        


        <Grid container spacing={24}>
          <Grid xs={12} style={{margin:'0 2%', background: 'linear-gradient(116deg, #ebf5f4, #efebf5)'}}>
            <Typography variant="title" style={{textAlign:'center', padding:'50px'}}>More Articles</Typography>
            <Grid container>
              <Grid item xs={1} sm={2} md={4}></Grid>
              
              {this.props.moreArticles.map((post) => {
                if (post.slug != this.props.currSlug ){
                  //console.log(post.slug)
                return(
                  <Link key={post.id} href={{ pathname: 'post', query: { name: post.slug }}}  as={`/post?${post.slug}`} prefetch>
                  <Grid item xs={10} sm={8} md={4} lg={2} className="heroHover" style={{paddingBottom:'50px'}}>
                    
                    <img
                      src={post.acf.featured_image}
                      style={{
                        height: '20vh',
                        top: '0',
                        maxWidth:'605px'
                    }}
                    />

                    <Paper elevation={0} style={{padding:'30px', textAlign:'center', width: '100%', maxWidth: '605px'}} className="headlineHover">
                      <Typography variant="headline" paragraph>
                        {post.acf.title}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {this.formatDate(post.date)}
                      </Typography>
                      <Typography variant="caption" gutterBottom>
                        By &nbsp; {post.acf.author.display_name}
                      </Typography>
                    </Paper>
                  </Grid>
                  </Link>
                    )
                    }

                    })}

              <Grid xs={1} sm={2} md={4}></Grid>
            </Grid>
          </Grid>
        </Grid>



      </div>

    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(withRouter(Post)));