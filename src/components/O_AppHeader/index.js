import React, { Component } from 'react';
import {bemClassName} from '../../utils';
import './styles.scss';

const cn = bemClassName('o-app-header');

class MainHeader extends Component {

  render() {
    const {mix, children} = this.props
    return (
      <header className={cn([mix])}>
        <h1 className={cn('title')}>React motion scroll</h1>
        <div className={cn('inner-content')}>
          {children}
        </div>
      </header>
    )
  }

}

export default MainHeader