import ReactBodymovin from 'react-bodymovin'
import animation from '../data/bigLogo.json'
import PropTypes from 'prop-types';

const AnimatedLogo = () => {
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

export default AnimatedLogo
