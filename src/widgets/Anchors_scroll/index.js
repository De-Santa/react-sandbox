import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import ScrollSync from './ScrollSync'

import {bemClassName} from '../../utils'
const cn = bemClassName('anchors-scroll')

class AnchorsScroll extends Component {

  state = {
    sectionsOffset: {},
    currentScrollPosition: 0,
    scrollMotionTo: 0,
    scrollMotionActive: false
  }

  componentDidMount() {
    this._getArticleSectionsOffset(this.props.article);
    this.scrollContainer.addEventListener('scroll', this._handleUserScroll)
  }

  componentWillUnmount() {
    this.scrollContainer.removeEventListener('scroll', this._handleUserScroll)
  }

  _renderChildren = () => (
    React.Children.map(this.props.children, child => {
      if (child.type.displayName === 'Navigation')
        return React.cloneElement(child, {
          sectionsOffset: this.state.sectionsOffset,
          startScrollMotion: this.startScrollMotion
        })
      else
        return child
    })
  )

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

  _getArticleSectionsOffset = () => {
    const sectionsArray = [...this.scrollContainer.childNodes]
    let sectionsOffset = {}

    sectionsArray.forEach((section) => {
      sectionsOffset = {...sectionsOffset, [section.id]: section.offsetTop }
    })

    this.setState({sectionsOffset})
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
    const { height, mix } = this.props

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

        {this._renderChildren()}

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
                scrollContainer = {scrollContainer}
                scrollMotionTo = {scrollMotionTo}
                scrollMotion = {currentStyles.scrollMotion}
                scrollMotionActive = {scrollMotionActive}
                setCurrentScrollPosition = {this.setCurrentScrollPosition}
                finishScrollMotion = {this.finishScrollMotion}
              />
            }}
          </Motion>) : (null)}
      </div>
    )
  }

}

export default AnchorsScroll