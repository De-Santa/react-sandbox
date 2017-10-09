import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import ScrollSync from './ScrollSync'

import {bemClassName} from '../../utils'
const cn = bemClassName('anchors-scroll')

class AnchorsScroll extends Component {

  state = {
    currentScrollPosition: 0,
    scrollMotionTo: 0,
    scrollMotionActive: false
  }

  sections = {}

  componentDidMount() {
    this.scrollContainer.addEventListener('scroll', this._handleUserScroll)
    this.sections = this._getArticleSections(this.scrollContainer)
    console.log(this);
  }

  componentDidUpdate() {
    if(this.props.scrollFired) {
      this.props.shutdownScroll();
      this.startScrollMotion(this.sections[this.props.scrollTo].offsetTop)
    }
  }

  componentWillUnmount() {
    this.scrollContainer.removeEventListener('scroll', this._handleUserScroll)
  }

  _getArticleSections = (container) => {
    let sections = {};
    const sectionsArray = [...container.childNodes];

    sectionsArray.forEach((section) => {
      sections = {...sections, [section.id]: section}
    })
    console.log('sections', sections);
    return sections
  }

  _handleUserScroll = () => {
    if (!this.state.scrollMotionActive) {
      console.log('[scroll_event_fired] scrolled from Top = ', this.scrollContainer.scrollTop)
      this.setCurrentScrollPosition(this.scrollContainer.scrollTop)
    }
  }

  _handleMouseWheel = () => {
    if (this.state.scrollMotionActive) {
      this.finishScrollMotion()
    }
  }

  setCurrentScrollPosition = (position) => {
    this.setState({
      currentScrollPosition: position
    })
  }

  startScrollMotion = (offset) => {
    console.log('offset',offset)
    this.setState({
      scrollMotionTo: offset,
      scrollMotionActive: true
    })
  }

  finishScrollMotion = () => {
    this.setState({
      scrollMotionActive: false
    })
  }


  render() {
    const { scrollContainer } = this
    const { currentScrollPosition, scrollMotionTo, scrollMotionActive } = this.state;
    const { children, height, mix } = this.props

    return (
      <div
        className = {cn([mix])}
        ref = {node => this['scrollContainer'] = node}
        onWheel={this._handleMouseWheel}
        style={{
          position: 'relative',
          height: height || '100%',
          overflowX: 'hidden',
          overflowY: 'scroll',
          WebkitOverflowScrolling: 'touch'
        }}
      >

        {children}

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
              return (
                <ScrollSync
                  scrollContainer = {scrollContainer}
                  scrollMotionTo = {scrollMotionTo}
                  scrollMotion = {currentStyles.scrollMotion}
                  scrollMotionActive = {scrollMotionActive}
                  setCurrentScrollPosition = {this.setCurrentScrollPosition}
                  finishScrollMotion = {this.finishScrollMotion}
                />
              )
            }}
          </Motion>) : (null)}
      </div>
    )
  }

}

export default AnchorsScroll