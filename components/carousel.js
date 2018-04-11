import Slider from "react-slick";
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
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

const iconMargin = {
  marginLeft: '10px'
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
      arrows:false,
      focusOnSelect: false,
      autoplay: false,
      speed: 1500,
      autoplaySpeed: 4000,
      cssEase: "cubic-bezier(0.19, 1, 0.22, 1)"
    };

    return (
      <div>
      <Grid container spacing={0}>
        <Grid item xs sm={1}>
        </Grid>
        <Grid item xs={5} sm={7}>
          <Slider className={"noFocus carousel"}
            {...settings}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            <div className={"noFocus carousel"}>
              <div className={"noFocus carousel"} style={{background:'linear-gradient(to right, #c3d4cc, #bccdc5)', height:'80vh'}}>
                <img src='/static/CBRE_Featured_1.png'
                style=
                {{
                  width: '80%',
                  minWidth: '400px',
                  height: 'auto',
                  marginRight: '30px',
                }} />
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

        <Grid item xs={6} sm={4}>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={false}
            arrows={false}
            speed={2000}
            cssEase={"cubic-bezier(0.19, 1, 0.22, 1)"}
            dots={true}
          >
          <div className={"noFocus carousel-two"}>
            <div className={"noFocus carousel-two"} style={{background:'linear-gradient(to right, #c3d4cc, #bccdc5)', height:'80vh'}}>
              <img src='/static/CBRE_Featured_2.png'

              style=
              {{
                width: '100%',
                minWidth: '400px',
                height: 'auto',
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
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Button disableRipple={true} style={expand} href="/project">
                <Typography style={expandBtn} variant="title" color="inherit">
                  See Case Study<Icon style={iconMargin}>add_circle</Icon>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

Carousel.propTypes = {

};

export default Carousel;
