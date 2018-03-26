import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Airbnb from '../assets/airbnb.svg';
import AmericanExpress from '../assets/american-express-1.svg';
import ATT from '../assets/att.svg';
import CBRE from '../assets/cbre.svg';
import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import LG from '../assets/lg.svg';
import NBC from '../assets/nbc.svg';
import TIME from '../assets/time.svg';

 const tileData = [
    {
      img: <Google />,
      title: "airbnb",
    },
    {
      img: <Facebook />,
      title: "airbnb",
    },
    {
      img: <ATT />,
      title: "airbnb",
    },
    {
      img: <TIME />,
      title: "airbnb",
    },
    {
      img: <Airbnb />,
      title: "airbnb",
    },
    {
      img: <LG />,
      title: "airbnb",
    },
    {
      img: <CBRE />,
      title: "airbnb",
    },
    {
      img: <AmericanExpress />,
      title: "airbnb",
    },
    {
      img: <NBC />,
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
      <GridList cols={3} cellHeight={80} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            {tile.img}
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
