import React, { Component } from 'react';


class Articles extends Component {

  componentDidMount() {
    this._getArticlesOffset(this.props.articles);
  }

  _getArticles = (articles) => (
    articles.map(article => (
      <div key = {article.id}
           ref = {node => this[article.id] = node}
           className = 'anchors-scroll__article'
      >
        {article.data}
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
    const { articles } = this.props;

    return (
      <div className = 'anchors-scroll__articles'>
        {this._getArticles(articles)}
      </div>
    )
  }

}

export default Articles;