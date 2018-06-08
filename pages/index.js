import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Grid from 'material-ui/Grid';
import Link from 'next/link'
import Hero from '../components/hero'
import OurWork from '../components/ourWork'
import OurProcess from '../components/ourProcess'
import OurWorkshops from '../components/ourWorkshops'
import LatestNews from '../components/latestNews'
import Carousel from '../components/carousel'
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
    const url = "https://" + fetchUrl + "/wp-json/wp/v2/news?per_page=3";
    const res = await fetch(url);
    const news = await res.json();
    if (news.length == 3){
      return {
        news: news,
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
      }
    }
  }

  render() {

  const { classes } = this.props;

  return (
    <div className={classes.root}>

          <Hero />

          <Carousel />

          <OurWork />

          <OurProcess />

          <OurWorkshops />

          <LatestNews blogs={this.props.blogs} news={this.props.news}/>

    </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
