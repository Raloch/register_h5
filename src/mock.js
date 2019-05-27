const Mock = require('mockjs')
// const Random = Mock.Random
// const domain = 'https://jsonplaceholder.typicode.com'
const code = 0

const getEmailCode = req => {
  let emailCode = Mock.mock({
    'number|1000-9999': 100
  })
  return {
    emailCode,
    code
  }
}

Mock.mock(`/v1/visitor/email-code`, 'post', getEmailCode)