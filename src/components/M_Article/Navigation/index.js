import React from 'react';
import * as T from 'prop-types'

const Navigation = ({cn, article, sectionsOffset, startScrollMotion}) => (
  <ul className = {cn('navigation')}>
    {article.map((articleSection) => (
      <li  key = {`${articleSection.id}-anchor`}
           onClick={() => {startScrollMotion(sectionsOffset[articleSection.id])}}
           className = {cn('anchor-link')}
      >
        {articleSection.title || articleSection.content}
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  article: T.array.isRequired, //articles objects array
 // sectionsOffset: T.object.isRequired, //calculated top offset
 // startScrollMotion: T.func.isRequired, //starts scroll
};

export default Navigation