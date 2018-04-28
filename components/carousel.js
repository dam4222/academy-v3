import Slider from "react-slick";
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import "../styles.scss"

const expand = {
  display: 'flex',
  justifyContent: 'flex-end',
  top: '-74px;',
}

const expandBtn = {
  background: '#fafafa',
  position: 'relative',
  zIndex: 500,
  padding:'25px',
  display: 'flex',
  alignItems: 'center'
}

const verticalText = {
	transform: 'rotate(-90deg)',
  position: 'relative',
  top: '130px'
}

const verticalLine = {
	transform: 'rotate(-90deg)',
  position: 'relative',
  top: '260px'
}

const iconMargin = {
  marginRight: '10px',
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: false,
      speed: 1500,
      autoplaySpeed: 4000,
      cssEase: "cubic-bezier(0.19, 1, 0.22, 1)",
      lazyLoad: 'ondemand',
      dots: true,
      arrows:false,
    };

    return (
      <div>
      <Grid container spacing={0} wrap-xs-wrap-reverse>
        <Grid item xs sm={1}>
          <Typography style={verticalText} variant="caption" color="secondary">
            Client – CBRE
          </Typography>
          <Divider style={verticalLine} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Slider className={"noFocus carousel"}
            {...settings}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            <div className={"noFocus carousel"}>
              <div className={"noFocus carousel"} style={{background:'linear-gradient(to right, #c3d4cc, #bccdc5)', height:'80vh', display: 'flex'}}>

              <Grid item xs={5} sm={6} md={8} lg={8} xl={8} style={{justifyContent: 'flex-end', display: 'flex'}}>
                <img src='/static/CBRE_Featured_1.png'
                style=
                {{
                  height: '70vh',
                }} />
                </Grid>
              </div>
            </div>
            <div className={"noFocus carousel"}>
              <div className={"noFocus carousel"} style={{background:'#D99296', height:'80vh'}}>
                <Typography variant="display4" color="secondary">
                2
                </Typography>
                <img src='#' />
              </div>
            </div>
            <div className={"noFocus carousel"}>
              <div className={"noFocus carousel"} style={{background:'#A18494', height:'80vh'}}>
                <Typography variant="display4" color="secondary">
                3
                </Typography>
                <img src='#' />
                </div>
            </div>
            <div className={"noFocus carousel"}>
              <div className={"noFocus carousel"} style={{background:'#39696E', height:'80vh'}}>
                <Typography variant="display4" color="secondary">
                4
                </Typography>
                <img src='#' />
              </div>
            </div>
            <div className={"noFocus carousel"}>
              <div className={"noFocus carousel"} style={{background:'#849EA1', height:'80vh'}}>
                <Typography variant="display4" color="secondary">
                5
                </Typography>
                <img src='#' />
              </div>
            </div>
          </Slider>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            arrows={false}
            focusOnSelect={false}
            speed={2000}
            cssEase={"cubic-bezier(0.19, 1, 0.22, 1)"}
            lazyLoad= {'ondemand'}
            >
          <div className={"noFocus carousel-two"}>
            <div className={"noFocus carousel-two"} style={{background:'linear-gradient(to right, #c3d4cc, #bccdc5)', height:'80vh'}}>
              <img src='/static/CBRE_Featured_2.png'

              style=
              {{
                width: '13%',
                position: 'absolute'
              }}

              />
            </div>
          </div>
          <div className={"noFocus carousel-two"}>
            <div className={"noFocus carousel-two"} style={{background:'#D99296', height:'80vh'}}>
              <Typography variant="display4" color="secondary">
              2
              </Typography>
              <img src='#' />
              </div>
            </div>
          <div className={"noFocus carousel-two"}>
            <div className={"noFocus carousel-two"} style={{background:'#A18494', height:'80vh'}}>
              <Typography variant="display4" color="secondary">
              3
              </Typography>
              <img src='#' />
              </div>
          </div>
          <div className={"noFocus carousel-two"}>
            <div className={"noFocus carousel-two"} style={{background:'#39696E', height:'80vh'}}>
              <Typography variant="display4" color="secondary">
              4
              </Typography>
              <img src='#' />
            </div>
          </div>
          <div className={"noFocus carousel-two"}>
            <div className={"noFocus carousel-two"} style={{background:'#849EA1', height:'80vh'}}>
              <Typography variant="display4" color="secondary">
              5
              </Typography>
              <img src='#' />
            </div>
          </div>
          </Slider>

        </Grid>

        </Grid>
      </div>
    );
  }
}

Carousel.propTypes = {

};

export default Carousel;
