import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import SimpleAppBar from '../components/simpleAppBar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import Router from 'next/router'
import 'isomorphic-fetch'
const fetchUrl = process.env.fetchUrl;

const styles = {
  paddFive:{
    padding: "5%"
  }
};

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
      content: {
      },
      title: '',
    };
  }

  //fetch details of the blog here
  async componentWillMount(){
    const url = 'http://' + fetchUrl + '/wp-json/wp/v2/blogs?slug=' + Router.query.name;
    const res = await fetch(url)
    const blog = await res.json()
    //console.log(blog[0])

    await this.setState({
      content: blog[0].content.rendered,
      title: blog[0].acf.title,
    })
  }



  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paddFive}>
      <Typography variant="headline">
        {this.state.title}
      </Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{__html: this.state.content}}>
        </div>
      </Typography>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Post));
