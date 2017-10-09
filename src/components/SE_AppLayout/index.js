import React, { Component } from 'react';

import O_AppHeader from '../O_AppHeader'
import Container_M_Article from '../../containers/Container_M_Article'

import {bemClassName} from '../../utils';
import './styles.scss';

const cn = bemClassName('se-app-layout');

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
    // const { articlesType } = this.state;
    //const { openMenu, closeMenu } = this.props.mainLayoutActions;

    return (
      <div className={cn()}>
        <O_AppHeader mix = {cn('header')} />
        <Container_M_Article
          articleType = 'image'
        />
      </div>
    )
  }

}

export default SE_AppLayout;