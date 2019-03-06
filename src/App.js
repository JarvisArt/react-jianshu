import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail'
import store from './store'
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont'
 
class App extends Component {
  render() {
    return (
      <div className='red'>
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
