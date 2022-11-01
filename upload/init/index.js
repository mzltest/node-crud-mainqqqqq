let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  

  indexinfo = await data.set({
    table: 'indexes',
    name:todo.filename,
  hashes:todo.hashes
  })
  return {
    
      ok: true,
      index: indexinfo.key
    
  }
}