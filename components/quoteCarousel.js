import Slider from "react-slick";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Quote from '../assets/quote.svg'

const root = {
  display:'flex',
  flexGrow:1,
  height:'auto',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  paddingTop: '100px',
  paddingBottom: '100px',
}

class QuoteCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: false,
      speed: 750,
      autoplaySpeed: 10000,
      cssEase: "cubic-bezier(0.19, 1, 0.22, 1)",
      lazyLoad: 'ondemand',
      autoplay:true,
    };
    return (
      <Grid item xs={12} sm={12} md={12} style={root}>
        <Grid item xs={1} sm={1} md={2}></Grid>
        <Grid item xs={10} sm={10} md={8}>
          <Slider {...settings} className={"noFocus carousel"} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', transition:'.5s all ease'}}>
            <div className={"noFocus carousel"}>
              <Typography variant='display4' gutterBottom paragraph={true}>
                <Quote />
              </Typography>
              <Typography variant='headline' gutterBottom paragraph={true} style={{maxWidth:'600px', width:'80vw', margin: '0 auto', paddingBottom:'20px'}}>
              Adam has a knack to boil down complex UX and product design concepts into simple, digestible ideas. He stands as an expert at the intersection of UX, Design Thinking, and Commerce. As a master facilitator, Adam spearheads a compelling workshop that will surely change the way your company builds products.
              </Typography>
              <img style={{display:'inline', width:'60px'}} src="https://cdn1.academyux.com/adam-fry-pierce@2x.jpg" />
              <Typography variant='title' gutterBottom paragraph={true} style={{paddingTop:'20px'}}>
                Adam Fry-Pierce
              </Typography>
              <Typography variant='caption' gutterBottom paragraph={true} style={{paddingBottom:'20px'}}>
                Director, Design Community @ INVISION
              </Typography>
            </div>
            <div className={"noFocus carousel"}>
              <Typography variant='display4' gutterBottom paragraph={true}>
                <Quote />
              </Typography>
              <Typography variant='headline' gutterBottom paragraph={true} style={{maxWidth:'600px', width:'80vw', margin: '0 auto', paddingBottom:'20px'}}>
                I left the workshop feeling truly inspired by the new relationships I was able to make along with being able to apply the processes Adam shared immediately with my design team at Comcast.

                I would highly recommend this workshop to anyone looking to validate their own design process or looking for a spark to reinvigorate their design thinking. Adam has a real gift to lead and inspire.
              </Typography>
              <img style={{display:'inline', width:'60px', borderRadius:'100px'}} src="https://cdn1.academyux.com/tj.jpg" />
              <Typography variant='title' gutterBottom paragraph={true} style={{paddingTop:'20px'}}>
                TJ DeGarmo
              </Typography>
              <Typography variant='caption' gutterBottom paragraph={true} style={{paddingBottom:'20px'}}>
                Sr. Design Manager, Technology + Product @ Comcast
              </Typography>
            </div>
            <div className={"noFocus carousel"}>
              <Typography variant='display4' gutterBottom paragraph={true}>
                <Quote />
              </Typography>
              <Typography variant='headline' gutterBottom paragraph={true} style={{maxWidth:'600px', width:'80vw', margin: '0 auto', paddingBottom:'20px'}}>
                Adam’s Design Sprints Workshop was a highly focused, interactive, collaborative day packed with valuable information and insights. The small setting and Adam’s enthusiasm made the session effective and inspiring. These forums are instrumental in shifting the mindset and advocating the principles of design-thinking within our organization.
              </Typography>
              <img style={{display:'inline', width:'60px', borderRadius:'100px'}} src="https://cdn1.academyux.com/fred.jpg" />
              <Typography variant='title' gutterBottom paragraph={true} style={{paddingTop:'20px'}}>
                Fred LaSenna
              </Typography>
              <Typography variant='caption' gutterBottom paragraph={true} style={{paddingBottom:'20px'}}>
                Director of Design/UX @ CNBC Digital
              </Typography>
            </div>
          </Slider>
        </Grid>
        <Grid item xs={1} sm={1} md={2}></Grid>
      </Grid>
    );
  }
}

QuoteCarousel.propTypes = {

};

export default QuoteCarousel;
