let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req).hashes
  let successed = []
  todo.forEach(elem=> {

    data.get({
      table: 'chunks',
      key: elem
    }).then(data=>{if(data){successed.push(data.key),console.log('N:'+data.key)}})

  })

  return {
    success:successed
  }
}