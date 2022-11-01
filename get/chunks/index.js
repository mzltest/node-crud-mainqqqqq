let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  let successed = []
  for(i=0;i<todo.length;i++){
elem=todo[i]
   res=await data.get({
      table: 'indexes',
      key: elem
    })
    //.then(chunk=>{}, failed.push(elem))
    successed.push(res.data)
  }

  return {
   success:successed
  }
}