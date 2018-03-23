import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Airbnb from '../assets/airbnb.svg';

 const tileData = [
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
    {
      img: Airbnb,
      title: "airbnb",
    },
  ];


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 800,
    height: 800,
  }
});

function LogoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cols={3} cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

LogoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogoGrid);
