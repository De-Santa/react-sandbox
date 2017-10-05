import React, {PureComponent} from 'react';
//import {Router} from 'react-router';
//import getRoutes from './routes';
import Container_SE_AppLayout from './containers/Container_SE_AppLayout'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <Container_SE_AppLayout />
      </Provider>
    )
  }
}

export default App