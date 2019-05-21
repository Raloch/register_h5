import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="register">
        <h1>注册</h1>
        <main>
          <div className="username">
            用户名：<input type="text"/>
          </div>
          <div className="email">
            邮箱：<input type="text"/>
          </div>
          <div className="vertification-code">
            验证码：<input type="text"/>
          </div>
          <div className="password">
            密码: <input type="password"/>
          </div>
          <div className="confirmpassword">
            确认密码：<input type="password"/>
          </div>
        </main>
        <button>注册</button>
      </div>
    );
  }
}

export default Register;