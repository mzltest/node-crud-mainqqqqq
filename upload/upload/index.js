let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  let successed=[]
  for(i=0;i<todo.length;i++)
  {
    elem=todo[i]
    let crypto = require('crypto');
let hash = crypto.createHash('sha1');
    let filehash=hash.update(Buffer.from(elem,'base64')).digest('hex')
  let ttl = (Date.now() / 1000) + (60 * 60 * 24 * 30) //30d ttl for data
  
    res= await data.set({table:'indexes','key':filehash,'data':elem,ttl:ttl})
await data.set({table:'hashindexes','key':filehash,ttl:ttl-(86400*3)})//(30-3)d ,dirty prevention of data inconsisency
    successed.push(res.key)

 
    
  
  }
 
  return {
  
     success:successed,
    
  }
}
