import { connect } from 'react-redux';
import O_AnchorsScroll from '../components/O_AnchorsScroll';

function mapStateToProps() {
  const articles = rawArticles.map((article, index) => ({...article, id:`article-${index + 1}`}));
  return {articles}
}

export default connect(mapStateToProps)(O_AnchorsScroll);

const rawArticles = [
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
