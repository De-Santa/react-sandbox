import img_batman from '../static/images/imageArticles/batman.jpg'
import img_captain_america from '../static/images/imageArticles/captain_america.jpg'
import img_hulk from '../static/images/imageArticles/hulk.jpg'
import img_spiderman from '../static/images/imageArticles/spiderman.jpg'
import img_superman from '../static/images/imageArticles/superman.jpg'

import { connect } from 'react-redux'
import M_Article from '../components/M_Article'

const prepareArticleSections = (rawArticle, articleType) => (
  rawArticle.map((articleSection, index) => {
    const sectionData = {
      id:`${articleType}-article-section-${index + 1}`,
    };
    return {...articleSection, ...sectionData}
  }
))

function mapStateToProps(state, {articleType}) {
  let article
  console.log(articleType)
  switch(articleType) {
    case 'smiley':
      article = prepareArticleSections(smileyArticle, articleType)
    break
    case 'image':
      article = prepareArticleSections(imageArticle, articleType)
  }

  return {article, articleType}
}

export default connect(mapStateToProps)(M_Article)

const smileyArticle = [
  {content: '😎'},
  {content: '😱'},
  {content: '😡'},
  {content: '😝'},
  {content: '😂'},
  {content: '😰'},
  {content: '😷'},
  {content: '🙉'},
  {content: '😒'}
]

const imageArticle = [
  {
    content: img_batman,
    title: 'Batman'
  },
  {
    content: img_captain_america,
    title: 'Capt. America'
  },
  {
    content: img_hulk,
    title: 'Hulk'
  },
  {
    content: img_spiderman,
    title: 'Spiderman'
  },
  {
    content: img_superman,
    title: 'Superman'
  }
]