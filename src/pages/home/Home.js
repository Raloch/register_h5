import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="home">
        <h2 className="btn-home fl"><Link to="/">主页</Link></h2>
        <h2 className="btn-logout fr">退出</h2>
        <h2 className="btn-login fr"><Link to="/login">登录</Link></h2>
      </div>
    );
  }
}

export default Home;