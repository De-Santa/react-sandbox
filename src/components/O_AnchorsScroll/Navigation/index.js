import React from 'react';
import * as T from 'prop-types'

const Navigation = ({articles, articlesOffset, startScrollMotion}) => (
  <ul className = 'anchors-scroll__navigation'>
    {articles.map((article) => (
    <li  key = {`${article.id}-anchor`}
         onClick={() => {startScrollMotion(articlesOffset[article.id])}}
         className = 'anchors-scroll__anchor-link'
    >
      {article.title || article.data}
    </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  articles: T.array.isRequired, //articles objects array
  articlesOffset: T.object.isRequired, //calculated top offset
  startScrollMotion: T.func.isRequired, //starts scroll
};

export default Navigation