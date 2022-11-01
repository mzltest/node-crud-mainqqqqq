let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  let successed = []
  let failed = []
  todo.forEach(elem=> {
    data.get({
      table: 'chunks',
      key: elem
    }).then(chunk=>{successed.push({hash:chunk.key,data:chunk.data})}, failed.push(elem))

  })

  return {
   success:successed,fail: failed
  }
}