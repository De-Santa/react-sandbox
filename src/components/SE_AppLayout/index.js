import React, { Component } from 'react';
import Container_O_AnchorsScroll from '../../containers/Container_O_AnchorsScroll';
import '../../_commonStyles/reset.scss';
//import MainHeader from '../O_MainHeader'
//import MainMenu from '../O_MainMenu'
//import * as T from 'prop-types';


class SE_AppLayout extends Component {
  render() {
    //const { mainLayout, classes } = this.props;
    //const { openMenu, closeMenu } = this.props.mainLayoutActions;

    return (
      <div className='app-layout'>
        <Container_O_AnchorsScroll/>
      </div>
    )
  }

}

export default SE_AppLayout;