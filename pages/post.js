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
import Chip from 'material-ui/Chip';;

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
      <div className={classes.paddFive}>
      {this.state.fetching ? 
        ( /*This is the load bar, when the post is being fetched*/
        <div><LinearProgress variant="query" /><br/></div>
        ) : 
        (
          <div>
            <Typography variant="headline">
              {this.state.title}
            </Typography>
            <Typography>
              <div  dangerouslySetInnerHTML={{__html: this.state.content}}>
              </div>
            </Typography>

            <div>
              {this.state.tags.map((tag ) => {
                return(
                  <Chip label={tag} className={classes.chip} />
                )
              })}
              <hr/>
              <Typography>
              <div dangerouslySetInnerHTML={{__html: this.state.author_picture}}>
              </div>
                By {this.state.author_name}
                - {this.state.date_posted}<br/>
                - <Chip label={this.state.author_job_title} className={classes.chip} />
              
              </Typography>
            </div>

          </div>
        ) }
      
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Post));