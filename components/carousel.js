import Slider from "react-slick";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { Parallax } from 'react-scroll-parallax';
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

const nextArrow = <IconButton><Icon>chevron_right</Icon></IconButton>
const prevArrow = <IconButton><Icon>chevron_left</Icon></IconButton>

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      loadingImage: true,
      firstProject: this.props.projects[0],
      activeSlide: 0,
    activeSlide2: 0,
    callCount: 0
    };
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  onLoad (id)  {

    if (this.state.loadingImage && id == this.state.firstProject.id){

      this.setState({callCount: this.state.callCount++})
      if (this.state.callCount >= 2)
        this.setState({
          loadingImage: false,
        })
    }
  }



  render() {

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: true,
      speed: 750,
      autoplaySpeed: 5000,
      cssEase: "cubic-bezier(0.19, 1, 0.22, 1)",
      dots: true,
      touchThreshold: 5,
      vertical: false,
      verticalSwiping: false,
      nextArrow,
      prevArrow,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs sm={1}>
          <Hidden smDown>
              <Typography style={verticalText} variant="caption" color="secondary">
                Client – {(this.state.nav1 != null && "props" in this.state.nav1) ? this.state.nav1.props.children[this.state.activeSlide].props.clientname : null}
          </Typography>
              <Divider style={verticalLine} />
            </Hidden>
            <Hidden smUp>
              <Typography style={horizontalText} variant="caption" color="secondary">
                Client – {(this.state.nav1 != null && "props" in this.state.nav1) ? this.state.nav1.props.children[this.state.activeSlide].props.clientname : null}
          </Typography>
              <Divider style={horizontalLine} />
            </Hidden>
          </Grid>
          <Hidden xsUp>
          <Grid item xs={12} sm={7}>
            <Slider className={"noFocus carousel"}
              {...settings}
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
            >
              {this.props.projects.map((project) => {
                return (
                  <div key={project.id} clientname={project.acf.client_name} className={"noFocus carousel"}>
                    <div className={"noFocus carousel carousel-inner"} style={{ background: project.acf.project_theme_color, height: '80vh', display: 'flex' }}>
                { this.state.loadingImage ? <CircularProgress style={progress} /> : null }
                      <div style={{ width:'100%', height:'100%', overflow:'hidden'}}>

                          <Link href={`/project?${project.slug}`} prefetch>
                            <a title={`${project.acf.client_name} || ${project.acf.project_title}`}>
                              <div onLoad={this.onLoad(project.id)} className={this.state.loadingImage ? 'hideCarouselImages' : 'showCarouselImages'} style={{backgroundImage: "url("+ project.acf.carousel_image_1 +")", backgroundSize:'cover', width:'100%', backgroundPosition:'center', height: '100%'}} ></div>
                            </a>
                          </Link>
                      </div>

                    </div>
                  </div>
                )
              })}
            </Slider>
          </Grid>
          </Hidden>

          <Grid item xs={12} sm={11}>
            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              {...settings}
            >
              {this.props.projects.map((project) => {
                return (
                  <div key={project.id} className={"noFocus carousel-two"}>
                    <Link href={`/project?${project.slug}`} prefetch>
                    <a title={project.title.rendered}>
                      <div className={"noFocus carousel-two carousel-inner"} style={{ background: project.acf.project_theme_color, height: '80vh' }}>
                        { this.state.loadingImage ? <CircularProgress /> : null }
                        <div style={{ width:'100%', height:'100%', overflow:'hidden'}}>
                          <div className={this.state.loadingImage ? 'hideCarouselImages' : 'showCarouselImages'} onLoad={this.onLoad(project.id)} height={this.state.loadingImage ? 0: '100%'} style={{backgroundImage: "url("+ project.acf.carousel_image_1 +")", backgroundSize:'cover', width:'100%', height: '100%', backgroundPosition:'center'}}></div>
                        </div>
                      </div>
                    </a>
                    </Link>
                  </div>
                )
              })
              }
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
