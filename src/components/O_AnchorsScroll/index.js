import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import ScrollSync from './ScrollSync';
import Articles from './Articles'
import Navigation from './Navigation'
import './styles.scss';
//import * as T from 'prop-types';


class O_AnchorsScroll extends Component {

  state = {
    articlesOffset: {},
    currentScrollPosition: 0,
    scrollMotionTo: 0,
    scrollMotionActive: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this._handleUserScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleUserScroll);
  }

  _handleUserScroll = () => {
    if (!this.state.scrollMotionActive) {
      console.log('[scroll_event_fired] scrolled from Top = ', document.documentElement.scrollTop);
      this.setCurrentScrollPosition(document.documentElement.scrollTop);
    }
  };

  _handleMouseWheel = () => {
    if (this.state.scrollMotionActive) {
      this.finishScrollMotion();
    }
  };

  setArticlesOffset = (offset) => {
    this.setState({
      articlesOffset: offset
    });
  };

  setCurrentScrollPosition = (position) => {
    this.setState({
      currentScrollPosition: position
    });
  };

  startScrollMotion = (offset) => {
    console.log('offset',offset);
    this.setState({
      scrollMotionTo: offset,
      scrollMotionActive: true
    })
  };

  finishScrollMotion = () => {
    this.setState({
      scrollMotionActive: false
    })
  };


  render() {
    const { articlesOffset, currentScrollPosition, scrollMotionTo, scrollMotionActive } = this.state;
    const { articles } = this.props;

    return (
      <div className='anchors-scroll' onWheel={this._handleMouseWheel}>

        <Articles
          articles = {articles}
          setArticlesOffset = {this.setArticlesOffset}
        />

        {scrollMotionActive ? (
          <Motion
          defaultStyle={{
            scrollMotion: currentScrollPosition //from
          }}
          style={{
            scrollMotion: spring(scrollMotionTo, {stiffness: 100, damping: 20}) //to
          }}
        >
          {currentStyles => {
            console.log('current styles', currentStyles);
            return <ScrollSync
              scrollMotionTo = {scrollMotionTo}
              scrollMotion = {currentStyles.scrollMotion}
              scrollMotionActive = {scrollMotionActive}
              setCurrentScrollPosition = {this.setCurrentScrollPosition}
              finishScrollMotion = {this.finishScrollMotion}
            />
          }}
        </Motion>) : (null)}

        <Navigation
          articles = {articles}
          articlesOffset = {articlesOffset}
          startScrollMotion = {this.startScrollMotion}
        />

      </div>
    )
  }

}

export default O_AnchorsScroll;