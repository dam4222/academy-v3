import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Airbnb from '../assets/airbnb.svg';
import AmericanExpress from '../assets/american-express-1.svg';
import ATT from '../assets/att-logo.svg';
import CBRE from '../assets/cbre.svg';
import Facebook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import LG from '../assets/lg.svg';
import NBC from '../assets/nbc-logo.svg';
import TIME from '../assets/time.svg';

 const tileData = [
    {
      img: <Google />,
      title: "Google",
    },
    {
      img: <Facebook />,
      title: "Facebook",
    },
    {
      img: <ATT />,
      title: "AT&T",
    },
    {
      img: <TIME />,
      title: "Time",
    },
    {
      img: <AmericanExpress />,
      title: "American Express",
    },
    {
      img: <LG />,
      title: "LG",
    },
    {
      img: <CBRE />,
      title: "CBRE",
    },
    {
      img: <Airbnb />,
      title: "Airbnb",
    },
    {
      img: <NBC />,
      title: "NBC",
    },
  ];


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    alignItems: 'center',
    marginLeft: '-35px'
  },
  gridList: {
    width: 500,
    height: 300,
  },
  tile: {
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
});

function LogoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

    <style>{`
      .MuiGridListTile-tile-205 {
        justify-content: center !important;
        display: flex !important;
        align-content: center !important;
        align-self: center !important;
        align-items: center !important;
        overflow: visible;
      }
    `}</style>

      <GridList cols={3} cellHeight={80} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} className={classes.tile} style={classes.style}>
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
