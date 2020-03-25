import Slider from "react-slick";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import "../styles.scss"
import Link from 'next/link';


import CircularProgress from "@material-ui/core/CircularProgress";


const expand = {
  display: 'flex',
  justifyContent: 'flex-end',
  top: '-74px;',
}

const expandBtn = {
  background: '#fafafa',
  position: 'relative',
  zIndex: 500,
  padding: '25px',
  display: 'flex',
  alignItems: 'center'
}

const verticalText = {
  transform: 'rotate(-90deg)',
  position: 'relative',
  top: '12vh'
}

const verticalLine = {
  transform: 'rotate(-90deg)',
  position: 'relative',
  top: '32vh'
}

const horizontalText = {
  position: 'relative',
  left:'-100px',
  float:'right'
}

const horizontalLine = {
  position: 'relative',
  top: '10px',
  left: '74px',
  width: '80px',
  float: 'right'
}

const iconMargin = {
  marginRight: '10px',
}

const centerAlign = {
  margin: '0 auto',
    width: '50%',
  padding: '10px',
}

const progress = {
   margin: '0 auto',
   height:'100%',
   width:'100%'
}


class Carousel extends React.Component {



  render() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
      <div>

                <h2> Single Item</h2>
                <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>

      </div>
    );
  }
}

Carousel.propTypes = {

};

export default Carousel;
