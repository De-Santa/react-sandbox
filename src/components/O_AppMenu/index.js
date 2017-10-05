import React, { Component } from 'react';

class MainMenu extends Component {

  render() {

    return (
        <Drawer className='main-menu' type='persistent' open = {this.props.isMenuOpened}>
          <IconButton onClick = {this.props.closeMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </Drawer>
    )
  }

}

export default MainMenu