import Slider from "react-slick";
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import "../styles.scss"

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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      focusOnSelect: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "cubic-bezier(0.19, 1, 0.22, 1)"
    };

    return (
      <div>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={2}>
        </Grid>
        <Grid item xs={5} sm={4}>
          <Slider className={"noFocus"}
            {...settings}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'linear-gradient(to right, #c3d4cc, #bccdc5)', height:'80vh'}}>1</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'darkgrey', height:'80vh'}}>2</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'blue', height:'80vh'}}>3</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'red', height:'80vh'}}>4</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'green', height:'80vh'}}>5</div>
            </div>
          </Slider>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={false}
            arrows={false}
            speed={1000}
            cssEase={"cubic-bezier(0.19, 1, 0.22, 1)"}
          >
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'linear-gradient(to right, #c3d4cc, #bccdc5)', height:'80vh'}}>1</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'darkgrey', height:'80vh'}}>2</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'blue', height:'80vh'}}>3</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'red', height:'80vh'}}>4</div>
            </div>
            <div className={"noFocus"}>
              <div className={"noFocus"} style={{background:'green', height:'80vh'}}>5</div>
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
