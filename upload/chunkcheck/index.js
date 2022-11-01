let arc = require('@architect/functions')
let data = require('@begin/data')
var successed
exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req).hashes
  successed = []
  for(i=0;i<todo.length;i++){
elem=todo[i]
    res=await data.get({
      table: 'indexes',
      key: elem
    })
    if(res){
      successed.push(res.key),console.log('I:'+res.key)

    }
  }

  return {
    success:successed
  }
}