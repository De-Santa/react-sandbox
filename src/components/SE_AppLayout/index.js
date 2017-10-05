import React, { Component } from 'react';
import AppHeader from '../O_AppHeader'
import Container_O_AnchorsScroll from '../../containers/Container_O_AnchorsScroll';
import '../../_commonStyles/reset.scss';
import './styles.scss';
//import MainMenu from '../O_MainMenu'
//import * as T from 'prop-types';


class SE_AppLayout extends Component {
  state = {
    articlesType: 'smiley'
  };

  _changeArticlesType = (newType) => {
    this.setState({
      articlesType: newType
    })
  };

  render() {
    const { articlesType } = this.state;
    //const { openMenu, closeMenu } = this.props.mainLayoutActions;

    return (
      <div className='app-layout'>
        <AppHeader>
          <div
            className='app-header__articles-change'
            onClick={() => {this._changeArticlesType('smiley')}}
          >
            Smiley articles
          </div>
          <div
            className='app-header__articles-change'
            onClick={() => {this._changeArticlesType('image')}}
          >
            Photo articles
          </div>
        </AppHeader>
        <Container_O_AnchorsScroll articlesType={articlesType} />
      </div>
    )
  }

}

export default SE_AppLayout;