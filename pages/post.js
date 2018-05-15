import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Router from 'next/router'
import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;
import { LinearProgress } from 'material-ui/Progress'
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import "../styles.scss"



const styles = {
  root:{
    height:'auto',
    paddingTop:'100px'
  }
};

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
      fetching: true,
      content: {
      },
      title: '',
    };
  }

  //fetch details of the blog here
  async componentWillMount(){
    //To share the post use the following plugin
    console.log(window.location.href);
    const url = 'https://' + fetchUrl + '/wp-json/wp/v2/blogs?slug=' + Router.query.name;
    const res = await fetch(url)
    const blog = await res.json()
    //console.log(blog[0])
    let date_posted = new Date(blog[0].date);
    date_posted = date_posted.toDateString();

    let raw_tags = blog[0].acf.tags === null ? [] : blog[0].acf.tags
    let tags = [];
    if (raw_tags.length > 0){
      raw_tags.map((tag) =>{
        tags.push[tag.name];
      });
    }


    await this.setState({
      content: blog[0].content.rendered,
      title: blog[0].acf.title,
      tags: tags,
      author_name: blog[0].acf.author.display_name,
      author_picture: blog[0].acf.author.user_avatar,
      date_posted: date_posted,
      author_job_title: blog[0].acf.author_job_title,
      fetching: false,
    })
  }



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      {this.state.fetching ?
        ( /*This is the load bar, when the post is being fetched*/
        <div><LinearProgress variant="query" /><br/></div>
        ) :
        (
          <Grid container style={{marginBottom:'40px'}}>
          <Grid xs={1} md={3} lg={4} xl={4}></Grid>
          <Grid xs={10} md={6} lg={4} xl={4} >
          <div>
            <Typography variant="body1" paragraph>
              {this.state.date_posted}
            </Typography>
            <Typography variant="display4" paragraph>
              {this.state.title}
            </Typography>

            <Grid xs={12} style={{paddingBottom:'40px'}}>
              <Grid container>
                <Grid xs={6} md={6} style={{display:'flex', alignItems:'center'}}>
                <div className="author-profile" dangerouslySetInnerHTML={{__html: this.state.author_picture}}></div>
                <div style={{display: 'inline-block', paddingLeft: '15px'}}>
                <Typography variant="button">by {this.state.author_name}</Typography>
                <Typography variant="caption">{this.state.author_job_title}</Typography>
                </div>
                </Grid>
              </Grid>
            </Grid>

              <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}>
              </div>

            <div>
              {this.state.tags.map((tag ) => {
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

        ) }

        <Grid container spacing={24}>
          <Grid xs={12} style={{margin:'0 2%', background: 'linear-gradient(116deg, #ebf5f4, #efebf5)'}}>
            <Typography variant="title" style={{textAlign:'center', padding:'50px'}}>More Articles</Typography>
            <Grid container>
              <Grid xs={1} sm={2} md={4}></Grid>
              <Grid item xs={10} sm={8} md={4} lg={2} className="heroHover" style={{paddingBottom:'50px'}}>

                <ParallaxBanner
                  className="heroImgWorkshops"
                  layers={[
                      {
                          image: "https://cdn1.academy-ny.com/wp-content/uploads/2018/05/09222124/2c632b50335679.58ce07b24102f.jpg",
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

                <Paper elevation={0} style={{padding:'30px', textAlign:'center', width: '100%', maxWidth: '605px'}} className="headlineHover">
                  <Typography variant="headline" paragraph>
                  Title
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    May 25th, 2018
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    By Adam Perlis
                  </Typography>
                </Paper>
              </Grid>
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

export default withRoot(withStyles(styles)(Post));
