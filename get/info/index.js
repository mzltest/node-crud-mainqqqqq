let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function create(req) {
//  let todo = arc.http.helpers.bodyParser(req).hashes
let filekey=req.queryStringParameters.key
 res= await data.get({table:'indexes',key:filekey,limit:1})
 return res
  
}