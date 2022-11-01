let arc = require('@architect/functions')
let data = require('@begin/data')


exports.handler = async function create(req) {
  let todo = arc.http.helpers.bodyParser(req)
  let successed=[]
  todo.forEach(elem =>{
    let crypto = require('crypto');
let hash = crypto.createHash('sha1');
    let filehash=hash.update(Buffer.from(elem,'base64')).digest('hex')
  
  
      data.set({table:'chunks','key':filehash,'data':elem})
    

 
    successed.push(filehash)

  
  })
 
  return {
  
     success:successed,
    
  }
}