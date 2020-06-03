import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';

  const styles = theme => ({
    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    },
    gridList: {

    },

  });

  let id = 0;
  function createData(url) {
    id += 1;
    return { id, url };
  }

  const images = [
    createData("/static/google_local.jpg"),
    createData("https://cdn1.academyux.com/wp-content/uploads/2018/06/12185815/ATT_Future_3.png"),
    createData("/static/wnw_journey.jpg"),
    createData("https://cdn1.academyux.com/wp-content/uploads/2018/07/05223541/Group.jpg"),
    createData("/static/sergio_vz.gif"),
    createData("/static/pride_march.jpg")
  ];

function SimpleImageGrid(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>

      <GridList className={classes.gridList + " our-people"} cellHeight="auto" cols="auto">

        {images.map(images => (
          <GridListTile key={images.id}>
            <img src={images.url} />
          </GridListTile>
        ))}
      </GridList>

    </div>


  );
}

SimpleImageGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleImageGrid);
