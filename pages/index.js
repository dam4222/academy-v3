import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import Hero from '../components/hero'
import OurWork from '../components/ourWork'
import OurProcess from '../components/ourProcess'
import OurServices from '../components/ourServices'
import LatestNews from '../components/latestNews'
import Carousel from '../components/carousel'
import Head from 'next/head';

const fetchUrl = process.env.fetchUrl
import 'isomorphic-fetch'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display: 'block'
    };
  }

  static async getInitialProps(nextProps){
    const projectUrl = "https://" + fetchUrl + "/wp-json/wp/v2/projects?featured=true";
    const projectRes = await fetch(projectUrl);
    const projects = await projectRes.json();

    const url = "https://" + fetchUrl + "/wp-json/wp/v2/news?per_page=3";
    const res = await fetch(url);
    const news = await res.json();
    if (news.length == 3){
      return {
        news: news,
        projects: projects,
      }
    }
    else{
      const count = 3 - news.length;
      const blogUrl = "https://" + fetchUrl + "/wp-json/wp/v2/blogs?per_page=" + count;
      const blogRes = await fetch(blogUrl);
      const blogs = await blogRes.json();
      return{
        news: news,
        blogs: blogs,
        projects: projects,
      }
    }
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll=()=>{
    if (window.pageYOffset > 200) {
      this.setState({ display: 'none' });

    }else{
      this.setState({ display: 'block' });
    }

  }

  render() {

  const { classes } = this.props;

  return (
    <div className={classes.root}>

          <Head>
            <title>Academy – Product Design Agency</title>
            <meta name="description" content="We are a Product Design Agency with a Human-Centered Approach. We make complex problems seem simple. Specializing in UX and UI, we craft digital products using Design Sprints to provide Product Strategy, Design, Research, & Analytics as well as Team-Based Training to help employ Design Thinking principles." />
          </Head>

          <Hero />

          <Grid container style={{position: 'fixed', bottom: '0'}}>
            <Grid item xs={1} sm={8}></Grid>
            <Grid item xs={2} sm={4}>
              <div className={"scroll-down"} role="button" style={{display:this.state.display, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
                <span></span>
              </div>
            </Grid>
          </Grid>

          <Carousel projects={this.props.projects} />

          <OurWork />

          <OurProcess />

          <OurServices />

          <LatestNews blogs={this.props.blogs} news={this.props.news}/>

    </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
