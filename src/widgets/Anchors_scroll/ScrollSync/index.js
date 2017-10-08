import { Component } from 'react';

class ScrollSync extends Component {
  componentDidUpdate () {
    console.log('scrollSync updated, props: ', this.props);
    const {scrollContainer, scrollMotionTo, scrollMotion, scrollMotionActive, finishScrollMotion, setCurrentScrollPosition} = this.props;

    if(scrollMotionActive) {
      if(scrollMotionTo !== scrollMotion) {
        scrollContainer.scrollTo(0, scrollMotion)
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