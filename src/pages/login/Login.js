import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="login">
        <h1>登录</h1>
        <main>
          <div className="username">
            用户名：<input type="text"/>
          </div>
          <div className="password">
            密码: <input type="password"/>
          </div>
        </main>
        <button>登录</button>
        <p><Link to="/register">没有账号？请注册...</Link></p>
      </div>
    );
  }
}

export default Login;