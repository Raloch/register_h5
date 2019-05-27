import React, { Component } from 'react';
import './Register.scss';
import { connect } from 'react-redux'
import { getEmailCode } from '../../store/actions/postActions'

// 注册页面
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      verificationCode: '',
      password: '',
      confirmPassword: '',
      invitationCode: ''
    };
  }
  emailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  verificationCodeChange = (event) => {
    this.setState({
      verificationCode: event.target.value
    })
  }
  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  confirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value
    })
  }
  invitationCodeChange = (event) => {
    this.setState({
      invitationCode: event.target.value
    })
  }
  // 注册按钮 -- 交互数据
  register = () => {
  }
  // 获取邮箱验证码
  getEmailCode = () => {
    let params = {
      username: this.state.email,
      type: 'reg'
    }
    this.props.getEmailCode(params)
  }
  render() {
    return (
      <div className="register">
        <h1>欢迎注册</h1>
        <main>
          <div className="email">
            邮箱：<input type="text" value={ this.state.email } onChange={ this.emailChange } />
          </div>
          <div className="vertification-code">
            验证码：<input type="text" value={ this.state.verificationCode } onChange={ this.verificationCodeChange } /><button onClick={ this.getEmailCode }>获取邮箱验证码</button>
          </div>
          <div className="password">
            密码: <input type="password" value={ this.state.password } onChange={ this.passwordChange } />
          </div>
          <div className="confirmpassword">
            确认密码：<input type="password" value={ this.state.confirmPassword } onChange={ this.confirmPasswordChange } />
          </div>
          <div className="invitation-code">
            邀请码(选填)：<input type="text" value={ this.state.invitationCode } onChange={ this.invitationCodeChange } />
          </div>
        </main>
        <button onClick={ this.register }>注册</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { getEmailCode })(Register);