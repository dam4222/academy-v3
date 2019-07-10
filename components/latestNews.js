import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap',
    paddingBottom:'100px',
    paddingTop:'100px',
    background:'#f5f5f5',
  },
  lastestNewsHeadline:{
    fontSize:'22px'
  }
});

function LatestNews(props) {
  const { classes } = props;

    return (
      <div className={classes.root}>

      <Grid container>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={10} sm={6} md={1} lg={2}>
          <Typography variant='display2'>
            Latest
          </Typography>
          <Typography variant='display1' style={{paddingBottom:'100px'}}>
            News
          </Typography>

        </Grid>
        <Grid item xs={1} sm={4}></Grid>
      </Grid>

      <Grid container spacing={8}>
        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
        <Grid item xs={10} sm={11} md={11} lg={10}>
        <Grid container spacing={40}>
        {props.news.map((latestNews) => {
          return(
            <Grid key={latestNews.id} item xs={12} sm={3} md={3} lg={3} className="latestNews">
              <Button style={{paddingTop:'10px', textTransform:'none', letterSpacing:0}} disableRipple={true} href={latestNews.acf.link} target="_blank" rel="noopener">
                <Typography variant='headline' className={classes.lastestNewsHeadline} gutterBottom>
                {latestNews.acf.headline}
                </Typography>
              </Button>
              <br></br>

              <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href={latestNews.acf.link} target="_blank" rel="noopener">
                <Typography variant="button" color="inherit">
                  Read more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                </Typography>
              </Button>
            </Grid>
          )
        })}

        {(props.blog == undefined) ? null : props.blogs.map((latestNews) => {
          return(
            <Grid key={latestNews.id} item xs={12} sm={3} md={3} lg={3} className="latestNews">
              <Button style={{paddingTop:'10px', textTransform:'none', letterSpacing:0}} disableRipple={true} href={`post?${latestNews.slug}`} target="_blank">
                <Typography variant='headline' className={classes.lastestNewsHeadline} gutterBottom>
                {latestNews.acf.title}
                </Typography>
              </Button>
              <br></br>
              <Typography variant='body1' gutterBottom noWrap={true}>
              {latestNews.acf.short_description}
              </Typography>
              <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href={`post?${latestNews.slug}`} target="_blank">
                <Typography variant="button" color="inherit">
                  Read more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
                </Typography>
              </Button>
            </Grid>
          )
        })}


          <Grid item xs={12} sm={12} md={2} lg={3} style={{display: 'flex', alignItems:'center', paddingLeft:'5%'}}>

            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/blog" target="_blank" rel="noopener">
              <Typography variant="button" color="inherit">
                See more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
              </Typography>
            </Button>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
      </div>
    );
  }

LatestNews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestNews);
