let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
//  let todo = arc.http.helpers.bodyParser(req).hashes
 let filekey=req.params.key
 data.get({table:'indexes',key:filekey}).then(data=>{
  return {
   filename:data.name,hashes:data.hashes
  }
 },()=>{return {status:404}})
  
}