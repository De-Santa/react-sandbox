import React, { Component } from 'react';


class Articles extends Component {

  componentDidMount() {
    this._getArticlesOffset(this.props.articles);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.articlesType !== this.props.articlesType) {
      this._getArticlesOffset(this.props.articles);
    }
  }

  _getArticles = (articles, articlesType) => (
    articles.map(article => (
      <div key = {article.id}
           ref = {node => this[article.id] = node}
           className = 'anchors-scroll__article'
      >
        {articlesType === 'image' ? (
          <img
            src={article.data}
            className = {`anchors-scroll__article-${articlesType}`}
          />
        ) : (
          <div
            className = {`anchors-scroll__article-${articlesType}`}
          >
            {article.data}
          </div>
        )}
      </div>
    ))
  );

  _getArticlesOffset = (articles) => {
    let articlesOffset = {};
    articles.forEach(({id}) => {
      articlesOffset = {...articlesOffset, [id]: (this[id].getBoundingClientRect().top + window.scrollY),};
    });

    this.props.setArticlesOffset(articlesOffset);
  };


  render() {
    const { articles, articlesType } = this.props;

    return (
      <div className = 'anchors-scroll__articles'>
        {this._getArticles(articles, articlesType)}
      </div>
    )
  }

}

export default Articles;