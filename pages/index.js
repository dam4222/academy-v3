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
      /* initial state */
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

  render() {

  const { classes } = this.props;

  return (
    <div className={classes.root}>

          <Head>
            <title>Academy – UX & Design Thinking Studio</title>
            <meta name="description" content="Think Better, Build Better with UX & Design Thinking. We craft digital experiences that make complex products seem simple. We offer end-to-end Design, Development, Research, & Analytics as well as team based Training." />
          </Head>

          <Hero />

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
