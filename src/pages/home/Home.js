import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../../store/actions/postActions'

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts()
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => {
    //     console.log(res)
    //   })
  }
  render() {
    let postItem = []
    if (this.props.posts.length > 0) {
      postItem = this.props.posts.slice(0, 7).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))
    }
    return (
      <div className="home">
        <h2 className="btn-home fl"><Link to="/">主页</Link></h2>
        <h2 className="btn-logout fr">退出</h2>
        <h2 className="btn-login fr"><Link to="/register">注册</Link></h2>
        <h2 className="btn-login fr"><Link to="/login">登录</Link></h2>
        <div className="post">
          <h1>hey{ this.props.title }</h1>
          { postItem }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  // posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  title: state.posts.title
})

export default connect(mapStateToProps, { fetchPosts })(Home)