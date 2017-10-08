import React, { Component } from 'react';

import AnchorsScroll from '../../widgets/Anchors_scroll';
import Navigation from './Navigation'

import {bemClassName} from '../../utils';
const cn = bemClassName('m-article');

import './styles.scss';

class M_Article extends Component {

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

  render() {
    const { article, articleType } = this.props

    return (
      <AnchorsScroll
        height = '500px'
        mix = {cn()}
        article = {article}
      >
        {this._getArticle(article, articleType)}

        <Navigation
          cn = {cn}
          article = {article}
        />
      </AnchorsScroll>
    )
  }

}

export default M_Article