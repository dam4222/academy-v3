import ReactBodymovin from 'react-bodymovin'
import animation from '../data/smallLogo.json'
import PropTypes from 'prop-types';

const AnimatedLogoSmall = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }

  return (
    <div>
      <ReactBodymovin options={bodymovinOptions}/>
    </div>
  )
}

AnimatedLogoSmall.propTypes = {

};

export default AnimatedLogoSmall
