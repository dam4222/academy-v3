import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Link from 'next/link'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap:'wrap',
    paddingBottom:'100px',
    paddingTop:'100px',
    background:'#f5f5f5',
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
          <Grid item xs={12} sm={3} md={3} lg={3} className="latestNews">
            <Typography variant='title' gutterBottom>
              Product Relays™
            </Typography>
            <br></br>
            <Typography variant='body1' gutterBottom>
            Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together.
            </Typography>
            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/work">
              <Typography variant="button" color="inherit">
                Read more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} className="latestNews">
            <Typography variant='title' gutterBottom>
              Product Relays™
            </Typography>
            <br></br>
            <Typography variant='body1' gutterBottom>
            Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together.
            </Typography>
            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/work">
              <Typography variant="button" color="inherit">
                Read more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} className="latestNews">
            <Typography variant='title' gutterBottom>
              Product Relays™
            </Typography>
            <br></br>
            <Typography variant='body1' gutterBottom>
            Product Relays are a framework that combines Design Sprints with a Modified Agile Sprints helping teams collaborate and work more efficiently together.
            </Typography>
            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/work">
              <Typography variant="button" color="inherit">
                Read more <Icon style={{fontSize:'14px', verticalAlign: 'middle',}}>chevron_right</Icon>
              </Typography>
            </Button>
            <Hidden smUp><Divider style={{marginTop:'40px'}} /></Hidden>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={3} style={{display: 'flex', alignItems:'center'}}>

            <Button style={{paddingTop:'10px'}} disableRipple={true} className={"underline"} href="/blog">
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
