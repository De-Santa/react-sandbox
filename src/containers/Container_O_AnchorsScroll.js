import img_batman from '../static/images/imageArticles/batman.jpg'
import img_captain_america from '../static/images/imageArticles/captain_america.jpg'
import img_hulk from '../static/images/imageArticles/hulk.jpg'
import img_spiderman from '../static/images/imageArticles/spiderman.jpg'
import img_superman from '../static/images/imageArticles/superman.jpg'

import { connect } from 'react-redux';
import O_AnchorsScroll from '../components/O_AnchorsScroll';

const prepareArticles = (rawArticles, articlesType) => (
  rawArticles.map((article, index) => {
    const articleInfo = {
      id:`article-${articlesType}-${index + 1}`,
      type: articlesType
    };
    return {...article, ...articleInfo}
  }
));

function mapStateToProps(state, {articlesType}) {
  let articles;
  console.log(articlesType);
  switch(articlesType) {
    case 'smiley':
      articles = prepareArticles(smileyArticles, articlesType);
    break;
    case 'image':
      articles = prepareArticles(imageArticles, articlesType)
  }

  return {articles}
}

export default connect(mapStateToProps)(O_AnchorsScroll);

const smileyArticles = [
  {data: '😎'},
  {data: '😱'},
  {data: '😡'},
  {data: '😝'},
  {data: '😂'},
  {data: '😰'},
  {data: '😷'},
  {data: '🙉'},
  {data: '😒'}
];

const imageArticles = [
  {data: img_batman, title: 'Batman'},
  {data: img_captain_america, title: 'Capt. America'},
  {data: img_hulk, title: 'Hulk'},
  {data: img_spiderman, title: 'Spiderman'},
  {data: img_superman, title: 'Superman'},
];