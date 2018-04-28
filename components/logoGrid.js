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
      img: <Google style={{width: '100%'}}/>,
      title: "Google",
    },
    {
      img: <Facebook style={{width: '100%'}}/>,
      title: "Facebook",
    },
    {
      img: <ATT style={{width: '100%'}}/>,
      title: "AT&T",
    },
    {
      img: <TIME style={{width: '100%'}}/>,
      title: "Time",
    },
    {
      img: <AmericanExpress style={{width: '100%'}}/>,
      title: "American Express",
    },
    {
      img: <LG style={{width: '100%'}}/>,
      title: "LG",
    },
    {
      img: <CBRE style={{width: '100%'}}/>,
      title: "CBRE",
    },
    {
      img: <Airbnb style={{width: '100%'}}/>,
      title: "Airbnb",
    },
    {
      img: <NBC style={{width: '100%'}}/>,
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
        width:100vw;
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
