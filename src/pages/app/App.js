import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

import Home from '../home/Home'
import Register from '../register/Register'
import Login from '../login/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={ Home } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
        </Router>
      </Provider>
    );
  }
}

export default App;
