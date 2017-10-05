import img_alex_bausch from '../static/images/imageArticles/alex_bausch.jpg'
import img_alex_fork from '../static/images/imageArticles/alex_fork.png'
import img_andriy_schechenko from '../static/images/imageArticles/andriy_schechenko.png'
import img_anton_mozgovoy from '../static/images/imageArticles/anton_mozgovoy.jpg'
import img_chami_akmeemana from '../static/images/imageArticles/chami_akmeemana.jpg'

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
  {data: img_alex_bausch, title: 'Alex Bausch'},
  {data: img_alex_fork, title: 'Alex Fork'},
  {data: img_andriy_schechenko, title: 'Andriy Schechenko'},
  {data: img_anton_mozgovoy, title: 'Anton Mozgovoy'},
  {data: img_chami_akmeemana, title: 'Chami Akmeemana'},
];