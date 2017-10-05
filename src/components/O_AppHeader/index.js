import React, { Component } from 'react';
import './styles.scss';

class MainHeader extends Component {

  render() {

    return (
      <AppBar className='main-header'>
        <Toolbar className='main-header__toolbar'>
          <IconButton
            color = 'contrast'
            aria-label = 'open menu'
            onClick={this.props.openMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  }

}

export default MainHeader