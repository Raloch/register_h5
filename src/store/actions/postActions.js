import { FETCH_POSTS, GET_EMAILCODE } from '../type/type'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data =>
  //       dispatch({
  //         type: FETCH_POSTS,
  //         payload: data
  //       })
  //     )
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      })
    })
}

export const getEmailCode = email => dispatch => {
  axios({
    method: 'post',
    url: '/v1/visitor/email-code',
    data: email,
    baseURL: ''
  }).then(res => {
    console.log(res)
    dispatch({
      type: GET_EMAILCODE,
      payload: res.data
    })
  })
}
