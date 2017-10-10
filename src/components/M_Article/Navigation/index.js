import React from 'react';
import * as T from 'prop-types'

const Navigation = ({className, cn, article, setScrollTo}) => (
  <ul className = {className}>
    {console.log(this)}
    {article.map((articleSection) => (
      <li
        key = {`${articleSection.id}-anchor`}
        className = {cn('anchor-link')}
        onClick={() => {setScrollTo(articleSection.id)}}
      >
        {articleSection.title || articleSection.content}
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  article: T.array.isRequired, //articles objects array
  setScrollTo: T.func.isRequired, //starts scroll
};

export default Navigation