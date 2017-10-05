import { Component } from 'react';

class ScrollSync extends Component {
  componentDidUpdate () {
    console.log('scrollSync updated, props: ', this.props);
    const {scrollMotionTo, scrollMotion, scrollMotionActive, finishScrollMotion, setCurrentScrollPosition} = this.props;

    if(scrollMotionActive) {
      if(scrollMotionTo !== scrollMotion) {
        window.scrollTo(0, scrollMotion)
      }
      else {
        finishScrollMotion();
        setCurrentScrollPosition(scrollMotion);
      }
    }
  }

  render () {
    return null
  }
}

export default ScrollSync;