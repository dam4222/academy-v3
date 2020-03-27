import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { Parallax } from 'react-scroll-parallax';
import "../styles.scss";
import Link from 'next/link';

import CircularProgress from "@material-ui/core/CircularProgress";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

class SwiperCarousel extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

   var params = {
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
   };

   return (
     <div>
     <Swiper {...params}>
       <div>Slide #1</div>
       <div>Slide #2</div>
       <div>Slide #3</div>
       <div>Slide #4</div>
       <div>Slide #5</div>
     </Swiper>
     </div>
   );
  }
 }

 SwiperCarousel.propTypes = {

 };

 export default SwiperCarousel;
