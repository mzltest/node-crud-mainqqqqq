let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  let ttl = (Date.now() / 1000) + (60 * 60 * 24 * 7)

  indexinfo = await data.set({
    table: 'indexes',
    name:todo.filename,
  hashes:todo.hashes,
    ttl:ttl //7d ttl for indexdoc
  })
  return {
    
      ok: true,
      index: indexinfo.key
    
  }
}
