import React, { Component } from 'react';
import './styles.scss';

class MainHeader extends Component {

  render() {
    const {children} = this.props
    return (
      <header className='app-header'>
        <h1 className='app-header__title'>React motion scroll</h1>
        <div className='app-header__inner-content'>
          {children}
        </div>
      </header>
    )
  }

}

export default MainHeader