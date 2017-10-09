import React, { Component } from 'react';

import AnchorsScroll from '../../widgets/Anchors_scroll';
import Navigation from './Navigation'

import {bemClassName} from '../../utils';
const cn = bemClassName('m-article');

import './styles.scss';

class M_Article extends Component {

  state = {
    scrollTo: null
  }

  _getArticleSection = (articleSection, articleType) => {
    switch (articleType) {
      case 'image':
        return (
          <img
            src = {articleSection.content}
            className = {cn(`section-${articleType}`)}
            alt = {articleSection.title}
          />
        )
      case 'smiley':
        return (
          <div
            className = {cn(`section-${articleType}`)}
          >
            {articleSection.content}
          </div>
        )
    }
  }

  _getArticle = (article, articleType) => (
    article.map(articleSection => (
      <div
        key = {articleSection.id}
        id = {articleSection.id}
        className = {cn('section')}
      >
        { this._getArticleSection(articleSection, articleType) }
      </div>
    ))
  )

  setScrollTo = (articleSection) => {
    this.setState({scrollTo: articleSection});
  }

  render() {
    const { article, articleType } = this.props

    return (
      <div
        className = {cn()}
      >
        <Navigation
          className = {cn('navigation')}
          cn = {cn}
          article = {article}
          setScrollTo = {this.setScrollTo}
        />

        <AnchorsScroll
          height = '500px'
          scrollTo = {this.state.scrollTo}
          mix = {cn('scroll-container')}
        >
          {this._getArticle(article, articleType)}
        </AnchorsScroll>
      </div>
    )
  }

}

export default M_Article