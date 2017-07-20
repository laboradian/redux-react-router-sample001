/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import {
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux'
//import PropTypes from 'prop-types'


// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

//-----------------------------------
// Action creators (Actionを返す)
//-----------------------------------

// 現段階では Action creators は使わないのでコメントアウトしておく
//const anAction = () => {
//  return {
//    type: '',
//  }
//}

//-----------------------------------
// Reducer
//-----------------------------------

const aState = (state = null/*, action*/) => {
  return state
}

//-----------------------------------
// Component
//-----------------------------------

class AppComponent extends React.Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">1つ目のページ</div>
        <div className="panel-body">
          <p>React Router を使ってページを移動します。</p>
          <ul>
            <li><Link to="/page2">2つ目のページへ</Link></li>
            <li><Link to="/page3">3つ目のページへ</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
AppComponent.propTypes = {};

class AppComponent2 extends React.Component {
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">2つ目のページ</div>
        <div className="panel-body">
          <p>React Router を使ってページを移動します。</p>
          <ul>
            <li><Link to="/">トップページへ</Link></li>
            <li><Link to="/page3">3つ目のページへ</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
AppComponent2.propTypes = {};

class AppComponent3 extends React.Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">3つ目のページ</div>
        <div className="panel-body">
          <p>React Router を使ってページを移動します。</p>
          <ul>
            <li><Link to="/">トップページへ</Link></li>
            <li><Link to="/page2">2つ目のページへ</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
AppComponent3.propTypes = {};

//-----------------------------------
// Container
//-----------------------------------

const AppContainer = (() => {

  const mapStateToProps = (/*state, ownProps*/) => {
    return {};
  }
  
  const mapDispatchToProps = (/*dispatch*/) => {
    return {}
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent);

})();

const AppContainer2 = (() => {

  const mapStateToProps = (/*state, ownProps*/) => {
    return {};
  }

  const mapDispatchToProps = (/*dispatch*/) => {
    return {}
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent2);

})();

const AppContainer3 = (() => {

  const mapStateToProps = (/*state, ownProps*/) => {
    return {};
  }

  const mapDispatchToProps = (/*dispatch*/) => {
    return {}
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent3);

})();

//-----------------------------------
// Store
//-----------------------------------

const store = createStore(
  combineReducers({
    aState,
    routing: routerReducer
  })
)

//-----------------------------------
// 画面に表示する
//-----------------------------------

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}/>
      <Route path="/page2" component={AppContainer2}/>
      <Route path="/page3" component={AppContainer3}/>
    </Router>
  </Provider>
), document.getElementById('root'))

